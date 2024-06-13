import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/auth/loginForm";
import { Deshboard } from "../page/deshboard";
import { ROUTES } from "../utils/constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.default,
    element: <Deshboard />,
  },
  {
    path: ROUTES.signIn,
    element: <Login />,
  },
]);

export const Routers = () => <RouterProvider router={router} />;
