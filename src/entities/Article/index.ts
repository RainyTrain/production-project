export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export type { Article } from "./model/types/article";
export type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
export {
  getArticleData,
  getArticleIsLoading,
  getArticleError,
} from "./model/selectors/getArticleSelector";
export {
  ArticleBlockType,
  ArticleType,
  ArticleSortField,
} from "./model/consts/consts";
export {
  articleDetailsAction,
  articleDetailsReducer,
} from "./model/slice/articleDetailsSlice/articleDetailsSlice";
export { ArticleList } from "./ui/ArticleList/ArticleList";
export type { ArticleView } from "./model/types/article";
