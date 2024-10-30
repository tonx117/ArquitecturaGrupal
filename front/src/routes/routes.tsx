/* eslint-disable react-refresh/only-export-components */
import { App } from "../App";
import { LoginForm } from "../pages/LoginForm";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import MatchGame from "../components/MatchGame";
import { RegisterForm } from "../pages/Register";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/Game",
    element: <MatchGame/>,
  },
  {
    path: "/Register",
    element: <RegisterForm/>
  }
];

export const RoutesComponent = () => {
  return (
    <RouterRoutes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </RouterRoutes>
  );
};
