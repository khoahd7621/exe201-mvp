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
  {
    path: "/dictionary",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DictionaryPage />,
      },
    ],
  },
  {
    path: "/translate",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TranslatePage />,
      },
    ],
  },
  {
    path: "/community",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CommunityPage />,
      },
    ],
  },
  {
    path: "/test",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TestPage />,
      },
    ],
  },
  {
    path: "/notebook",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <NoteBookPage />,
      },
    ],
  },
  {
    path: "/reading",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ReadingPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
