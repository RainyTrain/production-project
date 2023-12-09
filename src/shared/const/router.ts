export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLES_DETAILS = "articles_details",
  NOT_FOUND = "not_found",
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  ADMIN_PANEL = "admin_panel",
  FORBIDDEN_PAGE = "forbidden_page",
  SETTING_PAGE = "setting_page",
}

export const getAboutPage = () => "/about";
export const getProfilePage = (id: string) => `/profile/${id}`;
export const getMainPage = () => "/";
export const getArticlesDetailsPage = (id: string) => `/articles/${id}`;
export const getArticlesEditPage = (id: string) => `/articles/${id}/edit`;
export const getArticleCreatePage = () => "/articles/new";
export const getAdminPanelPage = () => "/admin";
export const getMForbiddenPage = () => "/forbidden";
export const getNotFoundPage = () => "/*";
export const getArticlesPage = () => "/articles";
export const getSettingPage = () => "/settings";

export const AppRouteByPath: Record<string, AppRoutes> = {
  [getAboutPage()]: AppRoutes.ABOUT,
  [getProfilePage(":id")]: AppRoutes.PROFILE,
  [getMainPage()]: AppRoutes.MAIN,
  [getArticlesDetailsPage(":id")]: AppRoutes.ARTICLES_DETAILS,
  [getArticlesEditPage(":id")]: AppRoutes.ARTICLE_EDIT,
  [getArticleCreatePage()]: AppRoutes.ARTICLE_CREATE,
  [getAdminPanelPage()]: AppRoutes.ADMIN_PANEL,
  [getMForbiddenPage()]: AppRoutes.FORBIDDEN_PAGE,
  [getArticlesPage()]: AppRoutes.ARTICLES,
  [getSettingPage()]: AppRoutes.SETTING_PAGE,
  [getNotFoundPage()]: AppRoutes.NOT_FOUND,
};
