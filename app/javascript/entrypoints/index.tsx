import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import { Home } from "../pages/Home";
import { NewPatient } from "../pages/NewPatient";
import { ViewPatient } from "../pages/ViewPatient";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewPatient />,
  },
  {
    path: "/patients/:id",
    element: <ViewPatient />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
