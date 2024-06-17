import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/auth/loginForm";
import { Deshboard } from "../page/deshboard";
import { ROUTES } from "../utils/constants/routes";
import { Error404 } from "../page/error/error404";
import { TestComponent } from "../page/test";
import { AuthGuard } from "../components/auth/guards/auth.guard";

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
    element: <AuthGuard />,
    children: [
      {
        path: ROUTES.test,
        element: <TestComponent />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export const Routers = () => <RouterProvider router={router} />;
