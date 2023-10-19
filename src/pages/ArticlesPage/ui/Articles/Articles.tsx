import { ArticleList } from "entities/Article";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Page } from "widgets/Page";
import { initArticlePage } from "../../model/services/initArticlesPage/initAticlesPage";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/getArticlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { ArticlesPageFilters } from "../ArticlePageFilters/ArticlesPageFilters";
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

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(initArticlePage(searchParams));
    }
  }, [dispatch, searchParams]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModule reducers={reducers}>
      <Page
        data-testid="ArticlesPage"
        // onScrollEnd={isLoading ? undefined : onLoadNextPart}
        className={classNames(cls.Articles, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={cls.list}
          view={view}
          articles={articles}
          isLoading={isLoading}
          onLoadNextPath={onLoadNextPart}
        />
      </Page>
    </DynamicModule>
  );
};

export default Articles;
