import { FC, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { homeLoader, queryClient } from "./network";

import AppLayout from "./layouts/AppLayout";

const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader(queryClient) },
    ],
  },
]);

const App: FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
