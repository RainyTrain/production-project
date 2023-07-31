import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import cls from "./ArticleDetailsPage.module.scss";

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
      <Text title={t("Comments")} className={cls.commentTitle} />
      <CommentList
        isLoading
        comments={[
          {
            id: "1",
            text: "huy",
            user: {
              id: "1",
              username: "beefucker",
              avatar:
                "https://www.researchgate.net/publication/335975371/figure/fig1/AS:806095123652619@1569199462871/Hacker-stock-photo-Image-credit-hacker-1-iaBeta-C-2017-Public-Domain.png",
            },
          },
        ]}
      />
    </div>
  );
};

export default ArticlesDetailsPage;
