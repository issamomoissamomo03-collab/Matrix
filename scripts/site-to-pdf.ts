/**
 * Export live web UI pages to PDF
 * Reads configuration from environment variables or CLI args
 */

import puppeteer from 'puppeteer'
import * as fs from 'fs'
import * as path from 'path'

// Auto-detect Next.js routes
function detectNextJsRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const pagesDir = path.join(process.cwd(), 'pages')
  
  if (fs.existsSync(appDir)) {
    // Next.js 13+ App Router
    const routes: string[] = ['/']
    const scanDir = (dir: string, baseRoute: string = '') => {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        if (entry.isDirectory() && !entry.name.startsWith('_')) {
          const route = `${baseRoute}/${entry.name}`
          const pageFile = path.join(dir, entry.name, 'page.tsx')
          const pageFileJs = path.join(dir, entry.name, 'page.js')
          if (fs.existsSync(pageFile) || fs.existsSync(pageFileJs)) {
            routes.push(route)
          }
          scanDir(path.join(dir, entry.name), route)
        }
      }
    }
    scanDir(appDir)
    return routes
  } else if (fs.existsSync(pagesDir)) {
    // Next.js Pages Router
    const routes: string[] = ['/']
    const scanPages = (dir: string, baseRoute: string = '') => {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        if (entry.isFile() && (entry.name === 'index.tsx' || entry.name === 'index.js')) {
          if (baseRoute) routes.push(baseRoute)
        } else if (entry.isDirectory() && !entry.name.startsWith('_')) {
          const route = `${baseRoute}/${entry.name}`
          scanPages(path.join(dir, entry.name), route)
        }
      }
    }
    scanPages(pagesDir)
    return routes
  }
  return ['/']
}

// Configuration from env or defaults
const BASE_URL = process.env.BASE_URL || process.env.NGROK_URL || 'http://localhost:3000'
const defaultRoutes = process.env.ROUTES || detectNextJsRoutes().join(',')
const ROUTES = defaultRoutes.split(',').map(r => r.trim()).filter(Boolean)
const OUT_DIR = process.env.OUT_DIR || 'dist/pdf'
const FORMAT = (process.env.FORMAT as any) || 'A4'
const SCALE = parseFloat(process.env.SCALE || '1')
const WAIT_UNTIL = (process.env.WAIT_UNTIL as any) || 'networkidle0'
const DELAY_MS = parseInt(process.env.DELAY_MS || '400')
const FULL_PAGE = process.env.FULL_PAGE === 'true'
const SELECTOR_TO_WAIT = process.env.SELECTOR_TO_WAIT
const PRINT_BACKGROUND = process.env.PRINT_BACKGROUND !== 'false' // default true
const MARGINS = process.env.MARGINS || '10mm'
const VIEWPORT_WIDTH = parseInt(process.env.VIEWPORT_WIDTH || '1440')
const VIEWPORT_HEIGHT = parseInt(process.env.VIEWPORT_HEIGHT || '900')

// Auth from .env
const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS
const COOKIE_STRING = process.env.COOKIE_STRING

// Ensure output directory exists
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
}

// Safe file name helper
function safeFileName(route: string): string {
  if (route === '/' || route === '') return 'index'
  return route.replace(/^\//, '').replace(/\//g, '-').replace(/[^a-z0-9-]/gi, '-')
}

async function exportToPDF() {
  console.log('🚀 Starting PDF export...')
  console.log(`📡 Base URL: ${BASE_URL}`)
  console.log(`📄 Routes: ${ROUTES.join(', ')}`)
  console.log(`📁 Output: ${OUT_DIR}\n`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const generatedFiles: string[] = []

  try {
    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`
      const fileName = `${safeFileName(route)}.pdf`
      const filePath = path.join(OUT_DIR, fileName)

      console.log(`📄 Processing: ${url}`)

      const page = await browser.newPage()

      // Set viewport
      await page.setViewport({
        width: VIEWPORT_WIDTH,
        height: VIEWPORT_HEIGHT,
      })

      // Set auth header if provided
      if (BASIC_AUTH_USER && BASIC_AUTH_PASS) {
        await page.setExtraHTTPHeaders({
          Authorization: `Basic ${Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PASS}`).toString('base64')}`,
        })
      }

      // Set cookies if provided
      if (COOKIE_STRING) {
        const cookies = COOKIE_STRING.split(';').map(cookie => {
          const [name, value] = cookie.trim().split('=')
          return { name, value, domain: new URL(BASE_URL).hostname, path: '/' }
        })
        await page.setCookie(...cookies)
      }

      // Navigate to page
      await page.goto(url, {
        waitUntil: WAIT_UNTIL,
        timeout: 60000,
      })

      // Wait for optional selector
      if (SELECTOR_TO_WAIT) {
        console.log(`  ⏳ Waiting for selector: ${SELECTOR_TO_WAIT}`)
        await page.waitForSelector(SELECTOR_TO_WAIT, { timeout: 30000 })
      }

      // Additional delay for animations
      if (DELAY_MS > 0) {
        await new Promise(resolve => setTimeout(resolve, DELAY_MS))
      }

      // Generate PDF
      const marginValue = MARGINS
      await page.pdf({
        path: filePath,
        format: FORMAT,
        scale: SCALE,
        printBackground: PRINT_BACKGROUND,
        margin: {
          top: marginValue,
          right: marginValue,
          bottom: marginValue,
          left: marginValue,
        },
        preferCSSPageSize: false,
      })

      await page.close()

      const stats = fs.statSync(filePath)
      const sizeKB = (stats.size / 1024).toFixed(2)
      console.log(`  ✅ Generated: ${fileName} (${sizeKB} KB)`)
      generatedFiles.push(filePath)
    }

    await browser.close()

    // Summary
    console.log('\n✨ PDF Export Complete!\n')
    console.log('Generated files:')
    let totalSize = 0
    generatedFiles.forEach(file => {
      const stats = fs.statSync(file)
      const sizeKB = stats.size / 1024
      totalSize += stats.size
      console.log(`  📄 ${path.relative(process.cwd(), file)} (${sizeKB.toFixed(2)} KB)`)
    })
    console.log(`\n📊 Total size: ${(totalSize / 1024).toFixed(2)} KB`)
    console.log(`📁 Output directory: ${path.resolve(OUT_DIR)}`)

  } catch (error) {
    await browser.close()
    console.error('\n❌ Error during PDF export:', error)
    process.exit(1)
  }
}

// Run export
exportToPDF().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})

