import { ArticleList } from "entities/Article";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { Text as TextDeprecated } from "shared/ui/Deprecated/Text";
import { useEffect } from "react";
import { ToggleFeatures } from "shared/features";
import { Text } from "shared/ui/Redesigned/Text";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = ({
  className,
}: ArticleRecommendationListProps) => {
  const { t } = useTranslation();

  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  useEffect(() => {
    if (articles) {
      console.log(articles, "artiles");
    }
  }, [articles]);

  if (isLoading || error) {
    return null;
  }

  return (
    <Vstack
      data-testId="ArticleRecommendationList"
      gap="8"
      className={classNames("", {}, [className])}
      max
    >
      <ToggleFeatures
        feature="isAppReDesigned"
        off={<TextDeprecated title={t("Recommendations")} />}
        on={<Text size="l" title={t("Recommendations")} />}
      />
      <ArticleList
        isTarget
        target="_blank"
        articles={articles}
        isLoading={isLoading}
        height="500px"
      />
    </Vstack>
  );
};
