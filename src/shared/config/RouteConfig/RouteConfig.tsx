import { AboutPage } from "pages/AboutPage";
import { Articles } from "pages/ArticlesPage";
import { ArticlesDetailsPage } from "pages/ArticlesDetailsPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";
import { ArticleEditPage } from "pages/ArticleEditPage";

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLES_DETAILS = "articles_details",
  NOT_FOUND = "not_found",
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLES_DETAILS]: "/articles/",
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
  [AppRoutes.ARTICLE_CREATE]: "/articles/new",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <Articles />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RoutePath.articles_details}:id`,
    element: <ArticlesDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
};
