import { createBrowserRouter, RouteObject } from "react-router-dom";

import { AdminLayout, MainLayout, QuizLayout } from "../layouts";
import {
  CommunityPage,
  DashboardPage,
  DictionaryPage,
  ExamPage,
  FlashCardPage,
  HistoryPage,
  LoginPage,
  LookupPage,
  ManageUserPage,
  NoteBookDetailPage,
  NoteBookPage,
  ProfilePage,
  QuizPage,
  ReadingDetailPage,
  ReadingPage,
  RegisterPage,
  TestPage,
  TranslatePage,
  UpgradePage,
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
        path: `${AppRoutes.dictionary}/lookup`,
        element: <LookupPage />,
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
        path: AppRoutes.profile,
        element: <ProfilePage />,
      },
      {
        path: AppRoutes.upgrade,
        element: <UpgradePage />,
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
  {
    path: `${AppRoutes.test}/:examType/history/:testResultId`,
    element: <QuizLayout />,
    children: [
      {
        index: true,
        element: <HistoryPage />,
      },
    ],
  },
  {
    path: AppRoutes.notebook,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <NoteBookPage />,
      },
      {
        path: `:noteBookSlug`,
        element: <NoteBookDetailPage />,
      },
      {
        path: `:noteBookSlug/flashcard`,
        element: <FlashCardPage />,
      },
    ],
  },
  {
    path: AppRoutes.reading,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ReadingPage />,
      },
      {
        path: `:readingId`,
        element: <ReadingDetailPage />,
      },
    ],
  },
  {
    path: AppRoutes.manage,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "users",
        element: <ManageUserPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
