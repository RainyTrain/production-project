import { ArticleDetails } from "entities/Article";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { Page } from "widgets/Page";
import { ArticleRecommendationList } from "features/ArticleRecommendationList";
import { ArticleRating } from "features/ArticleRating";
import { articleDetailsPageReducer } from "../../model/slice";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsHeader } from "../ArticleDetailsPageHeader/ArticleDetailsHeader";
import { ArticlesDetailsComments } from "../ArticlesDetailsComments/ArticlesDetailsComments";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t("Article is not found")}</div>;
  }

  return (
    <DynamicModule reducers={reducerList} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationList />
        <ArticlesDetailsComments id={id} />
      </Page>
    </DynamicModule>
  );
};

export default ArticlesDetailsPage;
