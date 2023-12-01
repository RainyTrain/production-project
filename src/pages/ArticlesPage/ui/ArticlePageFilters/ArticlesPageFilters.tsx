import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Deprecated/Card";
import { Input } from "shared/ui/Deprecated/Input";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { ArticleSortSelect } from "features/ArticleSortSelect";
import { ArticleTypeTabs } from "features/ArticleTypeTabs.tsx";
import cls from "./ArticlesPageFilters.module.scss";
import { useArticlesFilters } from "../../lib/hooks/useArticlesFilters";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const {
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    onChangeView,
    order,
    search,
    sort,
    view,
    type,
  } = useArticlesFilters();

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
