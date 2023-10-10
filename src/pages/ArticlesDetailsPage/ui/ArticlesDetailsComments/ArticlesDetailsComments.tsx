import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Text } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
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
    <div>
      <Text title={t("Comments")} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoading} comments={comments} />
    </div>
  );
};
