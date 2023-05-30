import { createBrowserRouter, RouteObject } from "react-router-dom";

import { MainLayout, QuizLayout } from "../layouts";
import {
  CommunityPage,
  DictionaryPage,
  ExamPage,
  LoginPage,
  NoteBookPage,
  ProfilePage,
  QuizPage,
  ReadingPage,
  RegisterPage,
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
        path: AppRoutes.notebook,
        element: <NoteBookPage />,
      },
      {
        path: AppRoutes.reading,
        element: <ReadingPage />,
      },
      {
        path: AppRoutes.profile,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: AppRoutes.login,
    element: <LoginPage />,
  },
  {
    path: AppRoutes.register,
    element: <RegisterPage />,
  },
  {
    path: AppRoutes.test,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ExamPage />,
      },
      {
        path: `:examType`,
        element: <TestPage />,
      },
    ],
  },
  {
    path: `${AppRoutes.test}/:examType/:quizSlug`,
    element: <QuizLayout />,
    children: [
      {
        index: true,
        element: <QuizPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
