# ⚡ AnswersAI – Data Viz Mini-Platform

A slim, single-page dashboard that ticks the boxes for the take-home.  
Built with React 18 + TypeScript + Tailwind/styled-components + Redux Toolkit + Firebase Auth.

> **Live demo (local only)**  
> `npm run dev` → http://localhost:5173

## 🛠 Setup

1. **Clone & install**

```bash
git clone https://github.com/<your-username>/data-viz-platform.git
cd data-viz-platform
npm install

2. **Environment Variables**
Create .env in the project root(same level as package.json)
VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxxxxxxx
VITE_FIREBASE_APP_ID=1:0000000000:web:xxxxxxxxxxxxxxxx

That’s all we need – only Firebase Auth is used.

3. **Run**
npm run dev       # Vite dev server
npm run build     # production build

