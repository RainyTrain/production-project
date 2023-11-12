import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types/sort";
import { Card } from "shared/ui/Card";
import { Input } from "shared/ui/Input";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { ArticleSortSelect } from "features/ArticleSortSelect";
import { ArticleTypeTabs } from "features/ArticleTypeTabs.tsx";
import { articlesPageAction } from "../../model/slice/articlesPageSlice";
import { fetchArticleList } from "../../model/services/fetchArticleList";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/getArticlesPageSelectors";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce({ callback: fetchData, delay: 100 });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch]
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageAction.setOrder(order));
      dispatch(articlesPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageAction.setSort(sort));
      dispatch(articlesPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageAction.setSearch(search));
      dispatch(articlesPageAction.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageAction.setType(value));
      dispatch(articlesPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWpapper}>
        <ArticleSortSelect
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
          order={order}
          sort={sort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input onChange={onChangeSearch} value={search} placeholder="Search" />
      </Card>
      <ArticleTypeTabs value={type} onCnahgeType={onChangeType} />
    </div>
  );
};
