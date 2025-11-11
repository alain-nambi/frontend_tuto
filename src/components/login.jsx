import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Alert,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/login/", form);

      if (res.status === 200) {
        const { access, refresh } = res.data;
        // ✅ Sauvegarde des tokens
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        console.log("✅ Connexion réussie :", res.data);

        // ✅ Redirection vers /home
        navigate("/home");
      }
    } catch (err) {
      if (err.response) {
        console.log("❌ Erreur de connexion :", typeof(err.response.status));

        if (err.response.status === 401) {
          setError("Adresse email ou mot de passe incorrect.");
        } else {
          setError(err.response.data?.detail || "Identifiants incorrects.");
        }

      }
      else setError("Erreur réseau. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <Paper shadow="md" radius="lg" p="xl" className="w-full max-w-sm bg-white border border-blue-50">
        <div className="text-center mb-6">
          <Title order={2} className="text-blue-700 font-semibold">
            Connexion
          </Title>
          <Text size="sm" c="dimmed">
            Accédez à votre espace
          </Text>
        </div>

        {error && (
          <Alert color="red" radius="md" mb="sm">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Nom d'utilisateur"
            placeholder="ex: tiavina"
            required
            variant="filled"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.currentTarget.value })
            }
          />

          <PasswordInput
            label="Mot de passe"
            placeholder="••••••••"
            required
            variant="filled"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.currentTarget.value })
            }
          />

          <Button
            type="submit"
            fullWidth
            radius="md"
            color="blue"
            disabled={loading}
            className="mt-3 font-semibold"
          >
            {loading ? <Loader size="sm" color="blue" /> : "Se connecter"}
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
