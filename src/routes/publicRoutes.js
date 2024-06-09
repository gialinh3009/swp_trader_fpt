import { lazy } from "react";
import HomePage from "../feature/page/home";
import Page404 from "../feature/page/page404";
import RegisterPage from "../feature/page/register";
import LoginPage from "../feature/page/login";
import ForgetPasswordPage from "../feature/page/forget-password";
import AdminLayout from "../components/layout/AdminLayout";
import ModLayout from "../components/layout/ModLayout";

export const publicRoutes = [
  { path: "/", element: HomePage },
  { path: "/login", element: LoginPage },
  { path: "/forget-password", element: ForgetPasswordPage },
  { path: "/register", element: RegisterPage },
  {
    path: "/admin/*",
    element: lazy(() => import("../feature/admin")),
    layout: AdminLayout,
  },
  {
    path: "/mod/*",
    element: lazy(() => import("../feature/mod")),
    layout: ModLayout,
  },
  { path: "*", element: Page404 },
];
