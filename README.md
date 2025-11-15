# Matrix Experts - Modern Website

A professional, futuristic corporate website built with Next.js 14, Tailwind CSS, and modern animation libraries.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** with custom brand colors
- **Framer Motion** for smooth animations
- **Three.js** for 3D particle effects
- **Fully Responsive** design
- **Modern UI/UX** with glassmorphism effects
- **Smooth Scroll** animations
- **Interactive Components** with hover effects

## 🎨 Design System

### Colors
- Primary Red: `#B30000`
- Graphite Gray: `#2C2F38`
- Light Gray: `#F5F5F5`
- Accent White: `#FFFFFF`

### Typography
- Headings: Poppins (600-700)
- Body: Inter (400-500)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with 3D particles
│   ├── About.tsx        # About us section
│   ├── Specialities.tsx # Service cards with flip animation
│   ├── WhatWeDo.tsx     # Process timeline
│   ├── WhyUs.tsx        # Value proposition grid
│   ├── Sectors.tsx      # Industries grid
│   ├── Partners.tsx    # Partners & clients
│   ├── Contact.tsx      # Contact form with particles
│   └── Footer.tsx       # Footer component
├── public/
│   └── images/          # Static images
└── package.json
```

## 🎯 Sections

1. **Hero** - Full-screen intro with 3D particle animation
2. **About Us** - Company overview with vision
3. **Specialities** - Flip cards showcasing services
4. **What We Do** - 6-step solution cycle timeline
5. **Why Matrix Experts** - Value proposition grid
6. **Sectors** - Industries we serve
7. **Partners & Clients** - Logo showcase
8. **Contact** - Contact form with animated background

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    red: '#B30000', // Your brand red
  },
  graphite: '#2C2F38',
  // ...
}
```

### Update Content
All content is in the component files. Edit the respective component to update text, images, or links.

### Add New Sections
1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/Header.tsx`

## 🎨 Animation Libraries

- **Framer Motion** - Scroll animations, hover effects
- **Three.js** - 3D particle systems
- **GSAP** - Available for advanced animations (optional)

## 📱 Responsive Breakpoints

- Mobile: Default
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)

## 🔧 Technologies

- Next.js 14.2.5
- React 18.3.1
- TypeScript 5.5.4
- Tailwind CSS 3.4.7
- Framer Motion 11.3.12
- Three.js 0.168.0

## 📄 License

© 2024 Matrix Experts. All rights reserved.





