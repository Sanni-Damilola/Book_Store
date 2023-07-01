import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../Layout";
import { LandingPage } from "../Pages";

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
