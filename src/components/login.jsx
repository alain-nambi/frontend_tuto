import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Alert,
  Loader,
  Card,
  Divider,
  CardSection,
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
        console.log("❌ Erreur de connexion :", typeof err.response.status);

        if (err.response.status === 401) {
          setError("Adresse email ou mot de passe incorrect.");
        } else {
          setError(err.response.data?.detail || "Identifiants incorrects.");
        }
      } else setError("Erreur réseau. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
      setForm({ username: "", password: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <Card>
          <Card.Section p="md" pb="xs">
            <Title order={3}>Log in to the application</Title>
            <Text size="sm" c="dimmed" mt={"xs"}>
              Enter your email and password to access your account.
            </Text>
          </Card.Section>

          {error && (
            <Card.Section p="md" py="xs">
              <Alert color="red">{error}</Alert>
            </Card.Section>
          )}

          <Divider my="xs" labelPosition="center" />
          <Card.Section p="md" py="xs">
            <TextInput
              label="Email"
              placeholder="alainnambi@gmail.com"
              required
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.currentTarget.value })
              }
            />
            <PasswordInput
              label="Password"
              placeholder="***********"
              type="password"
              required
              mt="md"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.currentTarget.value })
              }
            />
          </Card.Section>
          <Card.Section p="md" pt="xs">
            <Button fullWidth type="submit">
              {loading ? <Loader size="sm" color="blue" /> : "Se connecter"}
            </Button>
          </Card.Section>
        </Card>
      </form>
    </div>
  );
}

export default Login;
