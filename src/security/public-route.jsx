import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem("access_token");

    // ✅ Si l'utilisateur est déjà connecté → rediriger vers /home
    if (token) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default PublicRoute;
