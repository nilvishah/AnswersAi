# ⚡ AnswersAI – Data Viz Mini-Platform

A slim, single-page dashboard that ticks the boxes for the take-home.  
Built with React 18 + TypeScript + Tailwind/styled-components + Redux Toolkit + Firebase Auth.

> **Live demo (local only)**  
> `npm run dev` → http://localhost:5173

---

## 🛠 Setup

### 1. Clone & install

```bash
git clone https://github.com/<your-username>/data-viz-platform.git
cd data-viz-platform
npm install
```

### 2. Environment variables

Create a `.env` file in the root directory and add the following:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id_here
```

> These are required for Firebase Authentication to work.

### 3. Run

```bash
npm run dev       # Vite dev server
npm run build     # production build
```

---

## ✨ Features Implemented

| Area | What’s implemented |
|------|---------------------|
| **Auth** | Google OAuth (popup) with session persistence via Firebase. |
| **Routing** | React Router v6-based layout with protected routes. |
| **Dashboard** | - Line chart (Recharts)<br>- KPI cards<br>- Best scenario results explainer |
| **Variable Panel** | - Slide-over interaction<br>- Search<br>- Category sections<br>- Info tooltip on hover<br>- Apply (Rerun) selected variables |
| **Popover** | Pop-up list of checkboxes for quick variable selection. |
| **Responsive Design** | Sidebar collapse, mobile-friendly layouts, and flexible panel widths. |
| **Redux Store** | Global state for selected/applied variables via Redux Toolkit. |

---

## 🤔 Technical Decisions & Trade-offs

- **Redux Toolkit** was chosen for easy slice setup and state tracking with devtools.
- **Two-step selection (`selected` vs `applied`)** gives better UX and control over chart rendering.
- **Mixed Tailwind and styled-components**: Utility-first classes for quick layout, styled-components for reusable panels and buttons.
- **Static data** is used instead of fetching from an API to stay within the scope.
- **Custom hover delay** for "CO₂ Distribution" shows how variable-specific behaviors can be added.

---

## ⚠️ Known Limitations

- State resets on refresh – no persistence layer is implemented.
- No dynamic chart color variations or legends.
- OAuth only supports Google provider.
- No formal accessibility testing yet.

---

## ⏱ Time Spent

⏱ Time Spent

Completed in approximately 5 hours as intended, including setup, feature implementation, and testing.

---

## 🧪 Local Development

```bash
npm run dev        # Start local dev server
npm run build      # Build for production
npm run preview    # Preview build locally
npm run typecheck  # Run TypeScript check
```

**Happy Hacking!**
