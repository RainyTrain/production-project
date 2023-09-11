import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "../../model/slice/articleDetailsComment/articleDetailsCommentSlice";
import cls from "./ArticlesDetailsComments.module.scss";
import { getArticleCommentsIsLoading } from "../../model/selectors/commentSelectors";

interface ArticlesDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticlesDetailsComments = ({
  className,
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
    <div className={classNames(cls.ArticlesDetailsComments, {}, [className])}>
      <Text title={t("Comments")} className={cls.commentTitle} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoading} comments={comments} />
    </div>
  );
};
