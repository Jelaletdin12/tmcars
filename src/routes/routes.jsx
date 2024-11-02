import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "../components/MainLayout";
// const Login = lazy(() => import("../pages/login"));
import Login from '../pages/login'

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
          { path: "/", element: <Login /> },
          //{ path: "/product/:categoryTitle/:productId", element: <Product /> },
             ],
      },
    ]);
  
    return routes;
  }
  