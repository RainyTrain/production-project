import { getArticleData } from "entities/Article";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getArticlesEditPage, getArticlesPage } from "shared/const/router";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemButton } from "shared/ui/Deprecated/Button";
import { articleDetailsHeaderSelector } from "../../model/selectors/articleDetailsHeaderSelector";
import cls from "./ArticleDetailsHeader.module.scss";

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = ({
  className,
}: ArticleDetailsHeaderProps) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const canEdit = useSelector(articleDetailsHeaderSelector);
  const article = useSelector(getArticleData);

  const onBackToList = useCallback(() => {
    navigate(getArticlesPage());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getArticlesEditPage(article.id));
    }
  }, [navigate, article]);

  return (
    <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
      <Button theme={ThemButton.OUTLINE} onClick={onBackToList}>
        {t("Back")}
      </Button>
      {canEdit && (
        <Button
          className={cls.editBtn}
          theme={ThemButton.OUTLINE}
          onClick={onEditArticle}
        >
          {t("Edit")}
        </Button>
      )}
    </div>
  );
};
