import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
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
import { Page } from "widgets/Page/Page";
import { Text } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { ArticleRecommendationList } from "features/ArticleRecommendationList/ui/ArticleRecommendationList";
import { articleDetailsPageReducer } from "../../model/slice";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { getArticleRecommendations } from "../../model/slice/articleDetailsPageRecommendations/articleDetailsPageRecommendations";
import { getArticleComments } from "../../model/slice/articleDetailsComment/articleDetailsCommentSlice";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/commentSelectors";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsHeader } from "../ArticleDetailsPageHeader/ArticleDetailsHeader";

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

  if (!id) {
    return <div>{t("Article is not found")}</div>;
  }

  return (
    <DynamicModule reducers={reducerList} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationList />
        <Text title={t("Comments")} className={cls.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicModule>
  );
};

export default ArticlesDetailsPage;
