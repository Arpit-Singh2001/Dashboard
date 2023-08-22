import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Transationpage from "./pages/Transaction/Transaction.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/transactions",
      element: <Transationpage/>,
    },
    {
      path: "/support",
      element: <Support/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  );
};

export default App;
