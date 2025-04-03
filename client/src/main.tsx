import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap';
document.head.appendChild(linkElement);

createRoot(document.getElementById("root")!).render(<App />);
