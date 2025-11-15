# PDF Export Guide

Export live web UI pages to PDF with exact design preservation.

## Quick Start

### Option 1: Auto-start dev server and export

```bash
npm install
npm run pdf:dev
```

This will:
1. Start Next.js dev server
2. Wait for `http://localhost:3000` to be ready
3. Export all detected routes to PDF
4. Save PDFs in `dist/pdf/`

### Option 2: Manual (dev server already running)

```bash
npm run pdf
```

Assumes `http://localhost:3000` is already running.

---

## Configuration

Set environment variables in `.env` or pass via command line:

```bash
# Base URL (default: http://localhost:3000)
BASE_URL=http://localhost:3000
# or use NGROK_URL for external URLs
NGROK_URL=https://your-ngrok-url.ngrok.io

# Routes to export (comma-separated, or auto-detected)
ROUTES=/,/about,/contact

# Output directory (default: dist/pdf)
OUT_DIR=dist/pdf

# PDF Format (default: A4)
FORMAT=A4

# Scale (default: 1)
SCALE=1

# Wait strategy (default: networkidle0)
WAIT_UNTIL=networkidle0

# Delay after load for animations (ms, default: 400)
DELAY_MS=400

# Wait for specific selector (optional)
SELECTOR_TO_WAIT=#__next

# Print background (default: true)
PRINT_BACKGROUND=true

# Margins (default: 10mm)
MARGINS=10mm

# Viewport size (default: 1440x900)
VIEWPORT_WIDTH=1440
VIEWPORT_HEIGHT=900

# Basic Auth (optional)
BASIC_AUTH_USER=username
BASIC_AUTH_PASS=password

# Cookies (optional)
COOKIE_STRING=session=abc123;token=xyz789
```

---

## Auto-Detection

The script automatically detects Next.js routes:
- Scans `app/` directory for `page.tsx` files (App Router)
- Scans `pages/` directory for route files (Pages Router)
- Defaults to `/` if no routes found

---

## Example Usage

```bash
# Export with custom settings
DELAY_MS=1000 FORMAT=Letter npm run pdf

# Export specific routes
ROUTES=/,/about npm run pdf

# Export from production URL
BASE_URL=https://matrixexperts.com npm run pdf
```

---

## Output

PDFs are saved in `dist/pdf/`:
- `index.pdf` - Homepage (/)
- `about.pdf` - About page (/about)
- etc.

Each PDF preserves:
- ✅ Exact design and styling
- ✅ Colors and backgrounds
- ✅ Images and logos
- ✅ Animations (captured as static)
- ✅ Responsive layout (at specified viewport)

---

## Troubleshooting

**Server not responding:**
- Make sure `npm run dev` is running
- Check `BASE_URL` is correct

**Empty PDFs:**
- Increase `DELAY_MS` for slow-loading animations
- Use `SELECTOR_TO_WAIT` to wait for specific elements

**Missing styles:**
- Ensure `PRINT_BACKGROUND=true` (default)
- Check viewport size matches your design

**Routes not detected:**
- Manually set `ROUTES` environment variable
- Check `app/` or `pages/` structure

---

## Notes

- PDFs preserve exact visual appearance
- Animations are captured at a specific point in time
- Large pages may span multiple PDF pages
- Background images/colors are included by default
- Works with any Next.js route structure




