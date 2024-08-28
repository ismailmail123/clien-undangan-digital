import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Invitation from "../pages/Invitation";

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/invitation",
      element: <Invitation />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default index;
