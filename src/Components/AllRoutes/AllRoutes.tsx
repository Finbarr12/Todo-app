import React from "react";
import { useRoutes } from "react-router-dom";
import LandingScreen from "../LandingScreen";
import TodoList from "../TodoList";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LandingScreen />,
    },
    {
      path: "/todo",
      element: <TodoList />,
    },
  ]);

  return element;
};

export default AllRoutes;
