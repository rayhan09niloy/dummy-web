import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Product } from "./screens/Product";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Product />);
