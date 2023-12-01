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
import { ToggleFeatures } from "shared/features";
import { StickyContentLayout } from "shared/layouts";
import { initArticlePage } from "../../model/services/initArticlesPage/initAticlesPage";
import {
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
import { ViewSelectorContainer } from "../ViewSelectorContainer/ViewSelectorContainer";
import { FiltersContainer } from "../FiltersCntainer/FiltersContainer";

interface ArticlesProps {
  className?: string;
}

const reducers: ReducerList = {
  articlePage: articlesPageReducer,
};

const Articles = ({ className }: ArticlesProps) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

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
      <ToggleFeatures
        feature="isAppReDesigned"
        off={
          <Page
            data-testid="ArticlesPage"
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
        }
        on={
          <StickyContentLayout
            left={<ViewSelectorContainer />}
            contnent={
              <Page
                data-testid="ArticlesPage"
                className={classNames(cls.ArticlesRedesigned, {}, [className])}
              >
                <ArticleList
                  className={cls.list}
                  view={view}
                  articles={articles}
                  isLoading={isLoading}
                  onLoadNextPath={onLoadNextPart}
                />
              </Page>
            }
            right={<FiltersContainer />}
          />
        }
      />
    </DynamicModule>
  );
};

export default Articles;
