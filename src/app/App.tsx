import { FC, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { formatToGB } from "./utils/date";

const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const App: FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      {formatToGB(new Date())}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
