import { ArticleViewSelector } from "features/ArticleViewSelector";
import { useArticlesFilters } from "../../lib/hooks/useArticlesFilters";

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = ({
  className,
}: ViewSelectorContainerProps) => {
  const { view, onChangeView } = useArticlesFilters();
  return <ArticleViewSelector view={view} onViewClick={onChangeView} />;
};
