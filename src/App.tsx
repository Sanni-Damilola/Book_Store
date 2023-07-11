import { IndolentComponent, Routes } from "./Components";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center">
      {/* <RouterProvider router={Routes}></RouterProvider> */}
      <IndolentComponent />
    </div>
  );
}

export default App;
