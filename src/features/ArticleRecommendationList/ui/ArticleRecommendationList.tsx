import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Vstack } from "shared/ui/Stack/Vstack/Vstack";
import { Text } from "shared/ui/Text/Text";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = ({
  className,
}: ArticleRecommendationListProps) => {
  const { t } = useTranslation();

  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <Vstack gap="8" className={classNames("", {}, [className])}>
      <Text title={t("Recommendations")} />
      <ArticleList
        isTarget
        target="_blank"
        articles={articles}
        isLoading={isLoading}
        height="300px"
      />
    </Vstack>
  );
};
