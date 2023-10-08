import { getArticleData } from "entities/Article";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { RoutePath } from "app/providers/router/config/RouteConfig";
import { Button, ThemButton } from "shared/ui/Button/Button";
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
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    navigate(`${`${RoutePath.articles}/${article?.id}`}/edit`);
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
