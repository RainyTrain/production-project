import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemButton } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p> {t("Error has occured")}</p>
      <Button onClick={reloadPage} theme={ThemButton.CLEAR}>
        {t("Reload page")}
      </Button>
    </div>
  );
};
