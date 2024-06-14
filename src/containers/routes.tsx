import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/auth/loginForm";
import { Deshboard } from "../page/deshboard";
import { ROUTES } from "../utils/constants/routes";
import { Error404 } from "../page/error/error404";

const router = createBrowserRouter([
  {
    path: ROUTES.default,
    element: <Deshboard />,
  },
  {
    path: ROUTES.signIn,
    element: <Login />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export const Routers = () => <RouterProvider router={router} />;
