import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
// App is the root component
const entryPoint = document.getElementById("root");
// Here the App component is rendered:
ReactDOM.createRoot(entryPoint).render(<App />);
