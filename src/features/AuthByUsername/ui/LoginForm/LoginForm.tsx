import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" className={cls.input} placeholder={t("Username")} autofocus/>
      <Input type="text" className={cls.input} placeholder={t("Password")} />
      <Button className={cls.loginBtn}>{t("Sign in")}</Button>
    </div>
  );
};
