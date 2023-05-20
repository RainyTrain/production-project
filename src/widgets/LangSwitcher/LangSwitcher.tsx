import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Button, ThemButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <Button
      theme={ThemButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames("", {}, [className])}
    >
      {t("translate")}
    </Button>
  );
};
