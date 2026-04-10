# Caltech Student Resource Hub

A centralized wellness and resource hub for Caltech undergraduates. Built with React and Vite, the hub organizes campus resources across 8 tabbed sections -- food, physical health, mental health, academics, housing, support, and campus services -- with a visual flowchart on the home page to help students quickly find what they need.

A video walkthrough of the website can be found at the following link: https://drive.google.com/file/d/1C2zUy8xCNCpIAxL5fK1dtOZYpz0YUYnL/view?usp=share_link

---

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (version 18 or higher) — [https://nodejs.org](https://nodejs.org)
- **npm** (comes bundled with Node.js)
- **Git** — [https://git-scm.com](https://git-scm.com)

To verify your installations, open a terminal and run:

```bash
node -v
npm -v
git --version
```

Each command should print a version number. If any of them fail, revisit the installation links above.

---

## Getting Started

### 1. Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/smsteven22/2026-SLEC-Health-and-Wellbeing-Central-Hub-Demo.git
```

### 2. Navigate into the project folder

```bash
cd 2026-SLEC-Health-and-Wellbeing-Central-Hub-Demo
```

### 3. Navigate into the Vite app folder

The React app lives inside a subdirectory (`health_wellbeing_hub`), so navigate into it:

```bash
cd health_wellbeing_hub
```

### 4. Install dependencies

```bash
npm install
```

This will install React, Vite, Lucide React, and all other dependencies listed in `package.json`. It may take a minute.

### 5. Start the development server

```bash
npm run dev
```

Vite will start a local development server. You should see output like:

```
VITE v5.x.x ready in Xms
--> Local: http://localhost:5173/ --> Network: use --host to expose
```

### 6. Open the app

Open your browser and go to:

http://localhost:5173

You should see the Caltech Student Resource Hub running locally.

---

## Project Structure

```
wellness-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Food.jsx
│   │   ├── PhysicalHealth.jsx
│   │   ├── MentalHealth.jsx
│   │   ├── Academics.jsx
│   │   ├── HousingLife.jsx
│   │   ├── SupportIdentity.jsx
│   │   └── CampusFinance.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## Building for Production

When you are ready to deploy the site, run:

```bash
npm run build
```

This will generate an optimized static build in the `dist/` folder. You can then deploy the contents of `dist/` to any static hosting provider such as:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)

To preview the production build locally before deploying:

```bash
npm run preview
```

---

## Troubleshooting

**Port already in use** — If port 5173 is taken, Vite will automatically try the next available port. Check the terminal output for the correct URL.

**`npm install` fails** — Make sure your Node.js version is 18 or higher. Run `node -v` to check and update at [nodejs.org](https://nodejs.org) if needed.

**Blank page in browser** — Open the browser developer console (F12) and check for errors. The most common cause is a missing import or a typo in a component file name.

**Tabs go off screen** — Make sure you have copied the latest `App.css` in full. The navbar requires `flex-wrap: wrap` to handle the 8 tabs correctly.

---

## Tech Stack

- [React](https://react.dev) — UI framework
- [Vite](https://vitejs.dev) — build tool and dev server
- [Lucide React](https://lucide.dev) — icon library
- [Google Fonts](https://fonts.google.com) — Syne and DM Sans typefaces
