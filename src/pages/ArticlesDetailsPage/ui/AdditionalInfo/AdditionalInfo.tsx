import { getArticleData } from "entities/Article";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getArticlesEditPage } from "shared/const/router";
import { Card } from "shared/ui/Redesigned/Card";
import { ArticleAdditionalInfo } from "widgets/ArticleAdditionalInfo";
import cls from "./AdditionalInfo.module.scss";

interface AdditionalInfoProps {
  className?: string;
}

export const AdditionalInfo = memo(() => {
  const article = useSelector(getArticleData);

  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getArticlesEditPage(article.id));
    }
  }, [navigate, article]);

  if (!article) {
    return null;
  }

  return (
    <Card padding="24" border="round" className={cls.card}>
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        author={article?.user!}
        createdAt={article?.createdAt!}
        views={article?.views!}
      />
    </Card>
  );
});
