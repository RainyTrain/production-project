import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemButton } from "shared/ui/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button
      theme={ThemButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames("", {}, [className])}
    >
      {short ? t("Eng") : t("English")}
    </Button>
  );
};
