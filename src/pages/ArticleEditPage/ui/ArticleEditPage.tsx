import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const isEdit = Boolean(id);
  return <Page>{isEdit ? t("Edit page") : t("New page")}</Page>;
};

export default ArticleEditPage;
