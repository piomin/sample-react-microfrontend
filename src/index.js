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
import GetPerson from "./components/GetPerson";

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
  {
    path: "/details/:id",
    element: <GetPerson />,
  },
]);

rootReact.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);