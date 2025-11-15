# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Verify Images**
   Make sure all images are in `public/images/`:
   - security-shield.jpg
   - networking-grid.jpg
   - ai-landscape.jpg
   - support-lifebuoy.jpg
   - digital-cube.jpg

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to http://localhost:3000

## Troubleshooting

### Images Not Loading
- Check that images are in `public/images/` folder
- Verify image file names match exactly (case-sensitive)
- Clear browser cache

### Build Errors
- Delete `.next` folder and run `npm run build` again
- Check Node.js version (should be 18+)

### Animation Issues
- Ensure all dependencies are installed: `npm install`
- Check browser console for errors

## Production Build

```bash
npm run build
npm start
```

The built site will be in the `.next` folder.





