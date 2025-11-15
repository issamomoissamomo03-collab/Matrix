# Quick Start Guide - Matrix Experts Website

## 🚀 How to Run the Website

### Step 1: Install Dependencies

First, make sure you have Node.js 18+ installed. Then open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Three.js
- And all other dependencies

### Step 2: Start the Development Server

Once installation is complete, run:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

### Step 3: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

That's it! Your website should now be running. 🎉

---

## 📋 Available Commands

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Production Build
```bash
npm run build
npm start
```
Builds and starts the production server

### Linting
```bash
npm run lint
```
Checks code for errors

---

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is already in use, Next.js will automatically use port 3001.

### Installation Errors
- Make sure you have Node.js 18+ installed
- Delete `node_modules` folder and `package-lock.json` if they exist
- Run `npm install` again

### Images Not Loading
- Verify images are in `public/images/` folder:
  - logo.png
  - security-shield.jpg
  - networking-grid.jpg
  - ai-landscape.jpg
  - support-lifebuoy.jpg
  - digital-cube.jpg

### Build Errors
- Delete `.next` folder if it exists
- Run `npm run build` again

---

## 🌐 Access from Other Devices

If you want to access the website from other devices on your network:

1. Find your computer's IP address
2. Use: `http://YOUR_IP_ADDRESS:3000`

For example: `http://192.168.1.100:3000`

---

## 📝 Notes

- The website uses hot-reloading, so any changes you make will automatically refresh in the browser
- Press `Ctrl+C` in the terminal to stop the server
- The development server is for testing only. Use `npm run build` for production deployment





