import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

const About = () => {
  const { t } = useTranslation("about");
  return <Page data-testid="AboutPage">{t("About page")}</Page>;
};

export default About;