import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root") || new DocumentFragment();

createRoot(rootElement).render(<App />);
