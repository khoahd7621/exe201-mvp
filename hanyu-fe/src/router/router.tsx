import { createBrowserRouter, RouteObject } from "react-router-dom";

import { MainLayout } from "../layouts";
import { DictionaryPage } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DictionaryPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
