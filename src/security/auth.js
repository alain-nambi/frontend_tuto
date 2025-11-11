import axios from "axios";

export const verifyToken = async () => {
  const token = localStorage.getItem("access_token");
  if (!token) return false;

  // ✅ Vérification du token auprès du backend
  try {
    const res = await axios.post("http://localhost:8000/api/token/verify/", {
      token,
    });

    // ✅ Si le token est valide
    return res.status === 200;
  } catch (error) {
    // ❌ Si le token est invalide ou expiré
    console.warn("❌ Token invalide ou expiré " + error);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return false;
  }
};
