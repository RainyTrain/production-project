import { useCallback, useMemo } from "react";
import { Tab, TabItem } from "shared/ui/Deprecated/Tab";
import { ArticleType } from "../../../entities/Article/model/consts/consts";

interface ArticleTypeTabsProps {
  value: ArticleType;
  onCnahgeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({
  value,
  onCnahgeType,
}: ArticleTypeTabsProps) => {
  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: "All" },
      { value: ArticleType.ECONOMICS, content: "Economics" },
      { value: ArticleType.IT, content: "IT" },
      { value: ArticleType.SCIENCE, content: "Science" },
    ],
    []
  );

  const onTabClik = useCallback(
    (tab: TabItem) => {
      onCnahgeType(tab.value as ArticleType);
    },
    [onCnahgeType]
  );

  return <Tab tabs={typeTabs} value={value} onTabClick={onTabClik} />;
};
