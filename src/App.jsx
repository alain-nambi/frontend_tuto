import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import ProtectedRoute from "./security/protect-route";
import PublicRoute from "./security/public-route";
import { Navigate } from "react-router-dom";

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

        {/* 🔒 Route protégée (accès uniquement si connecté) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Page 404 au cas où */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
