import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./lib/routes.jsx";

const router = createBrowserRouter(routes, {
  basename: process.env.NODE_ENV === "production" ? "/gutendex/" : "/",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
