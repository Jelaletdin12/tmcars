import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "../components/mainLayout/MainLayout";
const Login = lazy(() => import("../pages/login/login"));
const Home = lazy(() => import("../pages/home/index"));
const InventoryManager = lazy(() => import("../pages/inventoryManager/index"));


export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout />
        </Suspense>
      ),
      path: "/",
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/inventory-manager", element: <InventoryManager /> },
      ],
    },
  ]);

  return routes;
}
