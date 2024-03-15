import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import Feed from "./components/Feed";
import Resume from "./components/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
