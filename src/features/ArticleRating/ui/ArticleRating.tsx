import {
  RatingCard,
  useGetArticleRating,
  useRateArticle,
} from "entities/Rating";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const userData = useSelector(getUserAuthData);

  const { data: rating, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? "",
  });

  const [rateArticleMutation] = useRateArticle({});

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticleMutation({
        userId: userData?.id ?? "",
        articleId,
        rate: starsCount,
        feedback,
      });
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height="120px" />;
  }

  const rate = rating?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCanel={onCancel}
      className={className}
      title="Rate the article!"
      feedbackTitle="Leave your feedback!"
      hasBeedback
      rate={rate?.rate}
    />
  );
};
