import { ArticleSortField, ArticleType } from "entities/Article";
import { ArticleSortSelect } from "features/ArticleSortSelect";
import { ArticleTypeTabs } from "features/ArticleTypeTabs.tsx";
import { classNames } from "shared/lib/classNames/classNames";
import { SortOrder } from "shared/types/sort";
import { Card } from "shared/ui/Redesigned/Card";
import { Input } from "shared/ui/Redesigned/Input";
import { Vstack } from "shared/ui/Redesigned/Stack";
import Search from "shared/assets/icons/search.svg";
import { Icon } from "shared/ui/Redesigned/Icon";
import cls from "./ArticlesFilters.module.scss";

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeSearch: (newSearch: string) => void;
  type: ArticleType;
  search: string;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSearch,
  type,
  search,
  onChangeType,
  onChangeSort,
}: ArticlesFiltersProps) => (
  <Card
    className={classNames(cls.ArticlesFilters, {}, [className])}
    padding="24"
  >
    <Vstack gap="32">
      <Input
        onChange={onChangeSearch}
        value={search}
        placeholder="Search"
        addonLeft={<Icon Icon={Search} />}
        size="s"
      />

      <ArticleSortSelect
        onChangeSort={onChangeSort}
        onChangeOrder={onChangeOrder}
        order={order}
        sort={sort}
      />
      <ArticleTypeTabs value={type} onCnahgeType={onChangeType} />
    </Vstack>
  </Card>
);
