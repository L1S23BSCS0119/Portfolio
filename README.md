# 🚀 Interactive Developer Workstation — Faiqa Abid

A responsive, dynamic, and dark-themed portfolio website built using vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. Designed to showcase software engineering projects, research experience, machine learning platforms, and cloud certifications through an interactive cyber-terminal interface.

---

## 🔗 Live Demo & Links

* **Live Demo:** https://l1s23bscs0119.github.io/Portfolio/
* **GitHub Repository:** https://github.com/L1S23BSCS0119/Portfolio
* **Google Skills Public Profile:** [View Profile](https://www.skills.google/public_profiles/75b092f4-376c-4e23-a4fa-376bfd36d8ab)

---

## 🛠️ Framework & Tech Stack Choices

For **Full Stack Web Development Task 1**, I deliberately chose a pure **Vanilla HTML/CSS/JS** approach without heavy external frameworks:

* **HTML5:** Provides clean, semantic structure across all sections (`<header>`, `<nav>`, `<section>`, `<header>`, `<footer>`).
* **CSS3 (Custom Design System):** Built with custom CSS variables (`:root`) for colors, typography, and glassmorphism styling. Features responsive **CSS Grid** and **Flexbox** layouts to handle screen scaling seamlessly.
* **Vanilla JavaScript (ES6+):**
  * **Interactive Terminal Console (`terminal.js`):** Built a custom CLI command parser allowing users to type commands (`help`, `ls`, `cat`, `skills`, `contact`) to explore portfolio details interactively.
  * **HTML5 Canvas Particle Animation (`canvas.js`):** Implemented an dynamic particle network canvas running on `requestAnimationFrame`.
  * **3D Tilt Effect (`main.js`):** Mouse-tracking card perspective tilt built using native DOM events and CSS transforms.
  * **Scroll-Triggered Skill Bars:** Uses `IntersectionObserver` API to animate skill progress meters smoothly as they enter the viewport.

---

## 📱 Responsive Layout & Breakpoints

The UI adapts across all screen sizes:

* **Desktop (> 1024px):** Full interactive workspace with side-by-side terminal view, multi-column project grid cards, and expanded certification blocks.
* **Tablet (768px - 1024px):** Flexible 2-column grid scaling for project cards and research highlights.
* **Mobile (< 768px):** Single-column stacked layout with an automated **hamburger menu toggle** for navigation and touch-optimized terminal input console.

---

## Project File Structure

├── index.html        # Main HTML structure with semantic sections
├── style.css         # Complete styling, CSS variables, glassmorphism, & media queries
├── canvas.js        # Background floating particle system animation
├── main.js          # Navigation toggle, 3D tilt cards, & scroll observers
├── terminal.js      # Interactive developer terminal command system
└── README.md        # Task documentation and setup overview
