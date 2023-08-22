import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "pages/ArticlesDetailsPage/model/selectors/commentSelectors";
import { fetchCommentsByArticleId } from "pages/ArticlesDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import { getArticleComments } from "pages/ArticlesDetailsPage/model/slice/articleDetailsComment/articleDetailsCommentSlice";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { classNames } from "shared";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Page } from "widgets/Page/Page";
import { Text } from "shared/ui/Text/Text";
import { getArticleRecommendations } from "pages/ArticlesDetailsPage/model/slice/articleDetailsPageRecommendations/articleDetailsPageRecommendations";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { fetchArticleRecommendations } from "pages/ArticlesDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage/model/slice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const isLoading = useSelector(getArticleCommentsIsLoading);

  const error = useSelector(getArticleCommentsError);

  const recommendsError = useSelector(getArticleCommentsIsLoading);

  const isLoadingRecommends = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);

  const navigate = useNavigate();

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      const status = dispatch(fetchCommentsByArticleId(id!));
      dispatch(fetchArticleRecommendations());
      console.log("fetch", status);
    }
  }, [id, dispatch]);

  const onSendComment = (arg: string) => {
    dispatch(addCommentForArticle(arg));
  };

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return <div>{t("Article is not found")}</div>;
  }

  return (
    <DynamicModule reducers={reducerList} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ThemButton.OUTLINE} onClick={onBackToList}>
          {t("Back")}
        </Button>
        <ArticleDetails id={id} />
        <Text title={t("Recommendations")} className={cls.commentTitle} />
        <ArticleList
          isTarget
          target="_blank"
          articles={recommendations}
          isLoading={isLoadingRecommends}
          className={cls.recommendations}
        />
        <Text title={t("Comments")} className={cls.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicModule>
  );
};

export default ArticlesDetailsPage;
