# Presentation Guide

## How to Generate PDF Slides

### 1. Install Dependencies

First, install the Marp CLI:
```bash
npm install
```

### 2. Generate PDF

Run the slide generation script:
```bash
npm run slides:pdf
```

This will create `dist/presentation.pdf` with all slides.

### 3. View Slides

You can also view the slides in VS Code using the Marp extension:
- Install "Marp for VS Code" extension
- Open `presentation.md`
- Click "Open Preview" in the editor

---

## Presentation Structure

The deck includes **18 slides** covering:

1. **Cover** - Project title and tagline
2. **Overview** - Problem, solution, audience
3. **Value Proposition** - Key benefits
4. **Tech Stack** - Technologies used
5. **Architecture** - System diagram
6. **Key Sections** (6 slides) - Hero, About, Specialities, Process, Clients & Partners
7. **Technical Features** - Implementation details
8. **Deployment** - How to run/build
9. **File Structure** - Project organization
10. **Design System** - Colors and typography
11. **Animation Strategy** - Animation approach
12. **Roadmap** - Next steps
13. **Key Metrics** - Performance targets
14. **Contact & Brand** - Company info
15. **Thank You** - Closing slide

---

## Customization

Edit `presentation.md` to:
- Update content
- Add screenshots (place in `public/` and reference)
- Modify colors in the `style` section
- Add or remove slides (use `---` separator)

---

## Notes

- Slides are optimized for 16:9 aspect ratio
- Brand colors match the website (#B30000, #2C2F38)
- Keep slides concise (3-5 bullets per slide)
- Professional, clean design

