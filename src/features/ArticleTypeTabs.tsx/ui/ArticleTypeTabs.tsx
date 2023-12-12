import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ToggleFeatures } from "shared/features";
import { Tab as TabDeprecated, TabItem } from "shared/ui/Deprecated/Tab";
import { Tab } from "shared/ui/Redesigned/Tab";
import { ArticleType } from "../../../entities/Article/model/consts/consts";

interface ArticleTypeTabsProps {
  value: ArticleType;
  onCnahgeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({
  value,
  onCnahgeType,
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t("All") },
      { value: ArticleType.ECONOMICS, content: t("Economics") },
      { value: ArticleType.IT, content: "IT" },
      { value: ArticleType.SCIENCE, content: t("Science") },
    ],
    [t]
  );

  const onTabClik = useCallback(
    (tab: TabItem) => {
      onCnahgeType(tab.value as ArticleType);
    },
    [onCnahgeType]
  );

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <TabDeprecated tabs={typeTabs} value={value} onTabClick={onTabClik} />
      }
      on={
        <Tab
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClik}
          direction="column"
        />
      }
    />
  );
};
