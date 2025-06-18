import React from "react";
import "./App.css";

// App components
import SideNavBar   from "./components/SideNavBar/SideNavBar";
import Dashboard    from "./features/dashboard/Dashboard";
import LoginButtons from "./components/LoginButtons";

// Auth context
import { useAuth } from "./context";

// React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { user, loading } = useAuth(); // pulling current user + loading state

  // Still checking Firebase auth state – prevent flicker or premature redirect
  if (loading) return <p className="text-white text-center mt-10">Loading…</p>;

  /* -------- if not logged in, show only login screen -------- */
  if (!user) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex justify-center items-center">
        <LoginButtons />
      </div>
    );
  }

  /* --------- if logged in, load app with routes + sidebar --------- */
  return (
    <Router>
      <Routes>

        {/* login route – if already logged in, redirect to dashboard */}
        <Route
          path="/login"
          element={
            user ? <Navigate to="/dashboard" replace /> : <LoginButtons />
          }
        />

        {/* main layout – sidebar wraps nested routes */}
        <Route path="/" element={<SideNavBar />}>

          {/* index = / → redirect to /dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* secured dashboard route – fallback to login if user somehow not present */}
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Route>

        {/* fallback route – anything else → 404 */}
        <Route path="*" element={<div className="p-8 text-white">404 – Not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
