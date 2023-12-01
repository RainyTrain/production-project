import { useTranslation } from "react-i18next";
import { ToggleFeatures } from "shared/features";
import { classNames } from "shared/lib/classNames/classNames";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { Button } from "shared/ui/Redesigned/Button";

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
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <ButtonDeprecated
          theme={ThemButton.CLEAR}
          onClick={toggleLanguage}
          className={classNames("", {}, [className])}
        >
          {short ? t("Eng") : t("English")}
        </ButtonDeprecated>
      }
      on={
        <Button variant="clear" onClick={toggleLanguage}>
          {short ? t("Eng") : t("English")}
        </Button>
      }
    />
  );
};
