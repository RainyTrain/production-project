import { RatingCard } from "entities/Rating";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t("Main Page")}
      <RatingCard
        title="qwerty"
        feedbackTitle="Leave your feedback"
        hasBeedback
      />
    </Page>
  );
};

export default MainPage;
