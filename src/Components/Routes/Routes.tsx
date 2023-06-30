import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../Layout";
import { Hero } from "../Pages";

const Routes: any = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
    ],
  },
]);

export default Routes;
