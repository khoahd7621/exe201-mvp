import { createBrowserRouter, RouteObject } from "react-router-dom";

import { MainLayout } from "../layouts";
import {
  CommunityPage,
  DictionaryPage,
  NoteBookPage,
  ReadingPage,
  TestPage,
  TranslatePage,
} from "../pages";
import AppRoutes from "./AppRoutes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DictionaryPage />,
      },
      {
        path: AppRoutes.dictionary,
        element: <DictionaryPage />,
      },
      {
        path: AppRoutes.translate,
        element: <TranslatePage />,
      },
      {
        path: AppRoutes.community,
        element: <CommunityPage />,
      },
      {
        path: AppRoutes.test,
        element: <TestPage />,
      },
      {
        path: AppRoutes.notebook,
        element: <NoteBookPage />,
      },
      {
        path: AppRoutes.reading,
        element: <ReadingPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
