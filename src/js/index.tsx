import * as React from "react";
import { createRoot } from "react-dom/client";
import "../css/main.css"
import { App } from "./App";


// Render your React component instead
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
