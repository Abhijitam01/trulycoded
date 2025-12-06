import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initPWA, setupInstallPrompt } from "./utils/registerSW";

// Only register the service worker in production to avoid stale caches during local dev
if (import.meta.env.PROD) {
	initPWA();
	setupInstallPrompt();
} else if ("serviceWorker" in navigator) {
	navigator.serviceWorker.getRegistrations().then((registrations) => {
		registrations.forEach((registration) => registration.unregister());
	}).catch((error) => {
		console.warn("Unable to unregister service workers in dev:", error);
	});
}

createRoot(document.getElementById("root")!).render(<App />);
