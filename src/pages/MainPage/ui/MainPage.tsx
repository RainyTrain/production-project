import { useTranslation } from "react-i18next";
import { StarRating } from "shared/ui/StarRating/StarRating";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();
  return (
  <Page>
    {t("Main Page")}
    <StarRating size={35}/>
  </Page>);
};

export default MainPage;
