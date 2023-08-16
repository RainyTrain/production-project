import { ArticleViewSelector } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Page } from "widgets/Page/Page";
import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/getArticlesPageSelectors";
import { fetchArticleList } from "../model/services/fetchArticleList";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {
  articlesPageAction,
  articlesPageReducer,
  getArticles,
} from "../model/slice/articlesPageSlice";
import cls from "./Articles.module.scss";

interface ArticlesProps {
  className?: string;
}

const reducers: ReducerList = {
  articlePage: articlesPageReducer,
};

const Articles = ({ className }: ArticlesProps) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

  const error = useSelector(getArticlesPageError);

  const isLoading = useSelector(getArticlesPageIsLoading);

  const view = useSelector(getArticlesPageView);

  const _inited = useSelector(getArticlesPageInited);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      if (!_inited) {
        dispatch(articlesPageAction.initState());
        dispatch(fetchArticleList({ page: 1 }));
      }
    }
  }, [dispatch, _inited]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModule reducers={reducers}>
      <Page
        onScrollEnd={isLoading ? undefined : onLoadNextPart}
        className={classNames(cls.Articles, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModule>
  );
};

export default Articles;
