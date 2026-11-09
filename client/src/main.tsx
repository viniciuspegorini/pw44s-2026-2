import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "@/App.tsx";

import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";

import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex utilities
import { AuthProvider } from "@/context/AuthContext";

// Temas servidos localmente a partir de /public/themes
const themeId = "theme-link";
const savedTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light";
const themeHref = `/themes/lara-${savedTheme}-blue/theme.css`;
const link = document.createElement("link");
link.id = themeId;
link.rel = "stylesheet";
link.href = themeHref;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>
);