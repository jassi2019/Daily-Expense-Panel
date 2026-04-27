# Daily Expense Panel

A sleek, mobile-friendly daily class expense management panel built with vanilla HTML, CSS & JavaScript. Track your daily classes, teachers, links, and expenses — all saved in your browser and exportable to Excel.

![Daily Expense Panel](https://img.shields.io/badge/Status-Live-brightgreen) ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black) ![License](https://img.shields.io/badge/License-MIT-blue)

## Live Demo

**[https://daily-expense-panel.vercel.app](https://daily-expense-panel.vercel.app)**

## Features

### Core Functionality
- **Auto-fill Date** — Today's date is auto-selected, but you can pick any custom date
- **Add Multiple Classes** — Add 2, 5, 6 or as many classes per day with teacher name & link
- **Single Day Expense** — Enter the total day's expense once (not per class)
- **Edit Expense** — Update the day's expense anytime without deleting the record
- **Add Class to Existing Day** — Add a missed class to any saved day record
- **Remove Individual Class** — Remove a specific class from a day (minimum 1 stays)
- **Delete Full Day** — Delete an entire day's record if needed
- **Excel Download** — Export all data to a formatted `.xlsx` file with Grand Total
- **Filter by Date/Teacher** — Quickly find records by date or teacher name

### Daily Expense Graph
- **Interactive Line Chart** — Visualize your daily expenses with Chart.js
- **Last 15 Days** — Shows the most recent 15 days of expense data
- **Auto-updates** — Graph refreshes every time you add/edit/delete a record
- **Hover Tooltips** — See exact amount on hover

### Dashboard Stats
- **Total Days** tracked
- **Total Classes** across all days
- **Grand Total** expense amount

### Design & Mobile
- **Dark glassmorphism UI** with animated gradient background
- **Fully mobile responsive** — card-based layout, no tables breaking on small screens
- **Touch-friendly** buttons and inputs
- **Smooth animations** — fade-in effects, toast notifications
- **Inter font** + **FontAwesome icons** for clean modern look

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling (dark theme, responsive, animations) |
| JavaScript (Vanilla) | Logic, DOM manipulation |
| [Chart.js](https://www.chartjs.org/) | Daily expense graph |
| [SheetJS (xlsx)](https://sheetjs.com/) | Excel file generation & download |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) | Typography |
| LocalStorage | Data persistence (browser-based) |
| [Vercel](https://vercel.com/) | Hosting & deployment |

## How It Works

### Step 1 — Add Classes
1. Select date (auto-fills today)
2. Enter teacher name + link (optional)
3. Click **"Add Class"** (or press Enter)
4. Repeat for all classes of the day

### Step 2 — Save Day Entry
1. Enter the total day's expense (pura din ka kharcha)
2. Click **"Save Day Entry"**
3. Done! Record appears in the list and graph updates

### Editing Saved Records
- **Edit Rs.** — Change the day's expense amount
- **+ Add Class** — Add a new class to that day
- **x (per class)** — Remove a specific class
- **Delete** — Remove the entire day's record

## Data Storage

All data is stored in **browser's LocalStorage**. This means:
- Data persists across page refreshes
- No server or database needed
- Data is per-browser (not synced across devices)
- Use **"Download Excel"** to backup your data regularly

## Project Structure

```
Daily-Expense-Panel/
├── index.html      # Single-file app (HTML + CSS + JS)
├── package.json    # Project metadata
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## Deployment

The app is deployed on Vercel. Any push to the `main` branch auto-deploys.

### Manual Deploy
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Local Development

No build step needed. Just open the file:

```bash
# Clone the repo
git clone https://github.com/jassi2019/Daily-Expense-Panel.git
cd Daily-Expense-Panel

# Open in browser
start index.html        # Windows
open index.html         # Mac
xdg-open index.html     # Linux
```

Or use a local server:
```bash
npx serve .
```

## Screenshots

### Desktop View
- Dashboard with stats cards and expense graph
- Step-by-step class entry form
- Card-based records with edit/add/delete actions

### Mobile View
- Fully responsive card layout
- Touch-friendly buttons
- Graph adapts to screen width

## License

MIT License — free to use, modify, and distribute.

---

Built with care for daily class expense tracking.
