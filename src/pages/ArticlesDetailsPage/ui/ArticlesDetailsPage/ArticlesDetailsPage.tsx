import { ArticleDetails } from "entities/Article";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t("Article is not found")}</div>;
  }
  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticlesDetailsPage;
