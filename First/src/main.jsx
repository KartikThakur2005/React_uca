import { createRoot } from "react-dom/client";
import { App as NewApp } from "./App";


const reactProject = createRoot(document.getElementById("root"));

reactProject.render(<NewApp></NewApp>)