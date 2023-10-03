<<<<<<< HEAD
import { RatingCard } from "entities/Rating";
import { useTranslation } from "react-i18next";
=======
import { useTranslation } from "react-i18next";
import { StarRating } from "shared/ui/StarRating/StarRating";
>>>>>>> c9bc05cbfc69ffb9958a83f3a833d78e0c1873d5
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();
  return (
<<<<<<< HEAD
    <Page>
      {t("Main Page")}
      <RatingCard
        title="qwerty"
        feedbackTitle="Leave your feedback"
        hasBeedback
      />
    </Page>
  );
=======
  <Page>
    {t("Main Page")}
    <StarRating size={35}/>
  </Page>);
>>>>>>> c9bc05cbfc69ffb9958a83f3a833d78e0c1873d5
};

export default MainPage;
