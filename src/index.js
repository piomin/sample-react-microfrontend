import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import store from "./store/index";
import Home from "./components/Home";
import AddPerson from "./components/AddPerson";

const root = document.getElementById("root");
const rootReact = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "add",
    element: <AddPerson />,
  },
]);

rootReact.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);