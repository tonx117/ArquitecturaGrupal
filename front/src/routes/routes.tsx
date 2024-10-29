/* eslint-disable react-refresh/only-export-components */
import { App } from "../App";
import { LoginForm } from "../pages/LoginForm";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import MatchGame from "../components/MatchGame";

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
