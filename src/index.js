
import {createRoot} from "react-dom/client";
import React from "react";
import App from "./App";


let root = createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
    )