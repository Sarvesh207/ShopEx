import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body/Body.jsx";
import ProductsContainer from "./Components/Body/Right/ProductsContainer.jsx";
import CategoryConainer from "./Components/CategoryContainer/CategoryConainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductsContainer />,
      },
      {
        path: "/category",
        element: <CategoryConainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
