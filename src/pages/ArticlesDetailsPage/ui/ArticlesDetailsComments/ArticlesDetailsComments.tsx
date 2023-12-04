import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Text as TextDeprecated } from "shared/ui/Deprecated/Text";
import { useTranslation } from "react-i18next";
import { Suspense, useEffect } from "react";
import { Loader } from "shared/ui/Deprecated/Loader";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { ToggleFeatures } from "shared/features";
import { Text } from "shared/ui/Redesigned/Text";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "../../model/slice/articleDetailsComment/articleDetailsCommentSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/commentSelectors";

interface ArticlesDetailsCommentsProps {
  id: string;
}

export const ArticlesDetailsComments = ({
  id,
}: ArticlesDetailsCommentsProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const isLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      if (id) {
        dispatch(fetchCommentsByArticleId(id));
        const status = dispatch(fetchArticleRecommendations());
        console.log("status", status);
      }
    }
  }, [id, dispatch]);

  const onSendComment = (arg: string) => {
    dispatch(addCommentForArticle(arg));
  };

  return (
    <Vstack gap="16" max>
      <ToggleFeatures
        feature="isAppReDesigned"
        off={<TextDeprecated title={t("Comments")} />}
        on={<Text size="l" title={t("Comments")} />}
      />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={isLoading} comments={comments} />
    </Vstack>
  );
};
