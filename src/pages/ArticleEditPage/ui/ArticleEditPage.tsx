import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);
  return <Page>{isEdit ? "Edit page" : "New page"}</Page>;
};

export default ArticleEditPage;
