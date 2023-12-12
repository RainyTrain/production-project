import { useMemo } from "react";
import { SortOrder } from "shared/types/sort";
import { Select, SelectOption } from "shared/ui/Deprecated/Select";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleSortField } from "entities/Article";
import { ToggleFeatures } from "shared/features";
import { ListBox } from "shared/ui/Redesigned/Popups";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { Text } from "shared/ui/Redesigned/Text";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("Ascending"),
      },
      {
        value: "desc",
        content: t("Descending"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("By date"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("By title"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("By views"),
      },
    ],
    [t]
  );

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
          <Select<ArticleSortField>
            onChange={onChangeSort}
            value={sort}
            options={sortFieldOptions}
            label={t("Sort by")}
          />
          <Select<SortOrder>
            onChange={onChangeOrder}
            value={order}
            options={orderOptions}
            label={t("Order by")}
            className={cls.order}
          />
        </div>
      }
      on={
        <div
          className={classNames(cls.ArticleSortSelectRedesigned, {}, [
            className,
          ])}
        >
          <Vstack gap="8">
            <Text text={t("Sort by")} />
            <ListBox<ArticleSortField>
              onChange={onChangeSort}
              value={sort}
              options={sortFieldOptions}
              direction="top"
            />
            <ListBox<SortOrder>
              onChange={onChangeOrder}
              value={order}
              options={orderOptions}
              direction="top"
            />
          </Vstack>
        </div>
      }
    />
  );
};
