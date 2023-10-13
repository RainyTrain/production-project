import { RatingCard } from "entities/Rating";
// eslint-disable-next-line rainytrain-fsd-plugin/public-api-imports
import { userUseActions } from "entities/User/model/slice/userSlice";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

const MainPage = () => {
  const { t } = useTranslation();

  const { sayHi } = userUseActions();

  const hadleGreet = useCallback(() => {
    sayHi();
  }, [sayHi]);

  useEffect(() => {
    hadleGreet();
  }, [hadleGreet]);

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
