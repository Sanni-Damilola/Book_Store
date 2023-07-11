import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../Pages";
import { lazy } from "react";

const HomeScreen = lazy(() => import("../Layout/HomeScreen"));

const Routes: any = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

export default Routes;
