import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { shadcnCssVariableResolver } from "./cssVariablesResolver";
import { shadcnTheme } from "./theme";
import "./style.css";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider
      theme={shadcnTheme}
      cssVariablesResolver={shadcnCssVariableResolver}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
