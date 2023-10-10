import { useMemo } from "react";
import { SortOrder } from "shared/types";
import { Select, SelectOption } from "shared/ui/Select";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleSortField } from "../../model/consts/consts";
import cls from "./ArticleSortSelect.module.scss";

interface ArticleSortSelectProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelect = (props: ArticleSortSelectProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: "Ascending",
      },
      {
        value: "desc",
        content: "Descending",
      },
    ],
    []
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: "By date",
      },
      {
        value: ArticleSortField.TITLE,
        content: "By title",
      },
      {
        value: ArticleSortField.VIEWS,
        content: "By views",
      },
    ],
    []
  );

  return (
    <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
      <Select<ArticleSortField>
        onChange={onChangeSort}
        value={sort}
        options={sortFieldOptions}
        label="Sort by"
      />
      <Select<SortOrder>
        onChange={onChangeOrder}
        value={order}
        options={orderOptions}
        label="Order by"
        className={cls.order}
      />
    </div>
  );
};
