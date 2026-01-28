# Leash & Lead

A professional website for a dog training business, built with React, Tailwind CSS, and React Router.

**Live Site:** [leash-lead-prototype.netlify.app](https://leash-lead-prototype.netlify.app)

---

## Project Overview

Leash & Lead is a responsive, multi-page website designed for a professional dog training business. The site emphasizes credibility, clear communication, and a polished user experience across all device sizes.

### Features

- **4 fully designed pages** with consistent branding and navigation
- **Responsive design** optimized for mobile, tablet, and desktop screens
- **Professional UI** with subtle hover effects, shadows, and smooth transitions
- **Client-side routing** for seamless page navigation

### Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, training philosophy, and call-to-action |
| **About** | Trainer background, credentials, and training approach |
| **Training** | 1, 2, and 3-week board & train program details |
| **Contact** | Business info and inquiry form |

### Tech Stack

- **React 18** – Component-based UI
- **Vite** – Fast build tooling and development server
- **Tailwind CSS** – Utility-first styling
- **React Router v6** – Client-side routing

---

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cadencecodes/leash-lead-prototype.git
   cd leash-lead-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

---

## Deployment

This site is deployed via **Netlify** with continuous deployment from GitHub.

- **Hosting:** Netlify
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Deploy Trigger:** Automatic on push to `main` branch

### Netlify Configuration

The `netlify.toml` file includes:
- Build settings for Vite
- SPA redirect rules for React Router

---

## AI-Assisted Development

This project was built using **Claude Code**, an AI-powered coding assistant. Below are key prompts used during development:

### Prompts Used

1. **Project Setup**
   > "I want to start a fresh React project in this folder for a professional dog training business called Leash & Lead. Use Vite and Tailwind CSS. Set up React Router with separate pages for Home, About, Training, and Contact."

2. **Navigation Styling**
   > "Style the navigation bar using Tailwind so it feels professional and serious. Use muted colors like charcoal or navy. Make sure it works well on mobile."

3. **Page Content Development**
   > "Build the Training page. Describe the 1 week, 2 week, and 3 week board and train programs. Include goals, structure, and expected outcomes for each program."

4. **UI Polish**
   > "Add subtle hover effects and drop shadow to buttons and navigation links. Or anywhere it makes sense."

5. **Responsive Design**
   > "Make sure it works on web screens as well" – ensuring proper scaling for large desktop displays.

---

## Time Tracking Comparison

| Approach | Estimated Time | Notes |
|----------|---------------|-------|
| **With AI (Claude Code)** | ~3 hours | Includes setup, all 4 pages, styling, responsive design, and deployment |
| **Manual Development** | ~8+ hours | Full work day or more for equivalent quality and polish |

### Time Savings Breakdown

- **Project scaffolding:** 5 min vs 30+ min
- **Component creation:** Minutes vs hours of boilerplate
- **Responsive styling:** Handled inline with initial development
- **Debugging & refinement:** AI caught issues proactively
- **Deployment setup:** Guided through Netlify CLI seamlessly

**Result:** Approximately 60-70% time savings while maintaining professional quality.

---

## Project Structure

```
leash-lead-prototype/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Training.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── netlify.toml
```

---

## Additional Notes

- **Form Functionality:** The contact form is frontend-only. To enable submissions, integrate with Netlify Forms, Formspree, or a custom backend.
- **Images:** Placeholder areas are included for trainer photo and potential hero images.
- **SEO:** Basic meta tags are in place. Consider adding Open Graph tags for social sharing.
- **Analytics:** Ready for Google Analytics or Netlify Analytics integration.

---

## License

This project is available for personal and educational use.

---

Built with [Claude Code](https://claude.ai/code) by Anthropic
