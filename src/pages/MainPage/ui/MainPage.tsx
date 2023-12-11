import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";
import "./style.scss";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <div className="wrapper">{t("Main Page")}</div>
    </Page>
  );
};

export default MainPage;
