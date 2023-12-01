import { AboutPage } from "pages/AboutPage";
import { Articles } from "pages/ArticlesPage";
import { ArticlesDetailsPage } from "pages/ArticlesDetailsPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { UserRole } from "entities/User";
import {
  AppRoutes,
  getAboutPage,
  getAdminPanelPage,
  getArticleCreatePage,
  getArticlesDetailsPage,
  getArticlesEditPage,
  getArticlesPage,
  getMainPage,
  getMForbiddenPage,
  getNotFoundPage,
  getProfilePage,
  getSettingPage,
} from "shared/const/router";
import { AppRouterProps } from "shared/types/router";
import { SettingPage } from "pages/SettingPage";

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
  [AppRoutes.MAIN]: {
    path: getMainPage(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getAboutPage(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getProfilePage(":id"),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getArticlesPage(),
    element: <Articles />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: getArticlesDetailsPage(":id"),
    element: <ArticlesDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getNotFoundPage(),
    element: <NotFoundPage />,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getArticlesEditPage(":id"),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getArticleCreatePage(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getAdminPanelPage(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.FORBIDDEN_PAGE]: {
    path: getMForbiddenPage(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.SETTING_PAGE]: {
    path: getSettingPage(),
    element: <SettingPage />,
  },
};
