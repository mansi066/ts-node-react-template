import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { ErrorPage, SignupPage } from "./routes/index.ts";

const router = createBrowserRouter([
  {
    path:"/", 
    element:<SignupPage />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
