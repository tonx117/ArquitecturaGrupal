/* eslint-disable react-refresh/only-export-components */
import { App } from "../App";
import { LoginForm } from "../pages/LoginForm";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import MatchGame from "../components/MatchGame";
import { RegisterForm } from "../pages/Register";
import { LanguageSelector } from "../pages/LanguageSelector";
import WordOrderGame from "../components/WordOrderGame";

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
    path: "/game",
    element: <MatchGame/>,
  },
  {
    path: "/register",
    element: <RegisterForm/>
  },
  {
    path: "/languageselect",
    element: <LanguageSelector/>
  },
  {
    path: "/wordordergame",
    element:<WordOrderGame/>
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
