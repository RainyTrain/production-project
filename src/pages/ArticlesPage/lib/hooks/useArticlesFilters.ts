import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types/sort";
import { articlesPageAction } from "../../model/slice/articlesPageSlice";
import { fetchArticleList } from "../../model/services/fetchArticleList";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/getArticlesPageSelectors";

export const useArticlesFilters = () => {
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

  return {
    view,
    order,
    sort,
    search,
    type,
    onChangeView,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeType,
  };
};
