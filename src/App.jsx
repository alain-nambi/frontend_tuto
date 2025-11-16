import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/login";
import Home from "./components/dashboard/home";
import ProtectedRoute from "./security/protect-route";
import PublicRoute from "./security/public-route";
import { Navigate } from "react-router-dom";
import { SignUp } from "./components/auth/signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Page par défaut → redirige vers /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 🔓 Route publique (accessible uniquement si non connecté) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* 🔒 Route protégée (accès uniquement si connecté) */}
        <Route
          path="/home"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        {/* Page 404 au cas où */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
