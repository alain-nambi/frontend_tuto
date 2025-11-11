import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyToken } from "./auth";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const valid = await verifyToken();
      setIsValid(valid);
    };
    checkAuth();
  }, []);

  if (isValid === null) {
    return <div className="p-6 text-center text-gray-500">Vérification du token...</div>;
  }

  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
