import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "pages/ArticlesDetailsPage/model/selectors/commentSelectors";
import { fetchCommentsByArticleId } from "pages/ArticlesDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import {
  articleDetailsCommentSliceReducer,
  getArticleComments,
} from "pages/ArticlesDetailsPage/model/slice/articleDetailsCommentSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Text } from "shared/ui/Text/Text";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  ArticleDetailsComments: articleDetailsCommentSliceReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const isLoading = useSelector(getArticleCommentsIsLoading);

  const error = useSelector(getArticleCommentsError);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      const status = dispatch(fetchCommentsByArticleId(id!));
      console.log("fetch", status);
    }
  }, [id, dispatch]);

  if (!id) {
    return <div>{t("Article is not found")}</div>;
  }
  return (
    <DynamicModule reducers={reducerList} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t("Comments")} className={cls.commentTitle} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModule>
  );
};

export default ArticlesDetailsPage;
