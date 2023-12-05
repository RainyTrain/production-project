import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { Input as InputDeprecated } from "shared/ui/Deprecated/Input";
import { Text as TextDeprecated, TextTheme } from "shared/ui/Deprecated/Text";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { classNames } from "shared/lib/classNames/classNames";
import { ToggleFeatures } from "shared/features";
import { Input } from "shared/ui/Redesigned/Input";
import { Button } from "shared/ui/Redesigned/Button";
import { Text } from "shared/ui/Redesigned/Text";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModule reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppReDesigned"
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t("Authorisation form")} />
            {error && <TextDeprecated text={error} theme={TextTheme.ERROR} />}
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t("Username")}
              autofocus
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t("Password")}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              theme={ThemButton.OUTLINE}
              disabled={isLoading}
              className={cls.loginBtn}
              onClick={onLoginClick}
            >
              {t("Sign in")}
            </ButtonDeprecated>
          </div>
        }
        on={
          <Vstack
            gap="8"
            className={classNames(cls.LoginForm, {}, [className])}
          >
            <Text title={t("Authorisation form")} />
            {error && <Text text={error} variant="error" />}
            <Input
              type="text"
              className={cls.input}
              placeholder={t("Username")}
              autofocus
              onChange={onChangeUsername}
              value={username}
            />
            <Input
              type="text"
              className={cls.input}
              placeholder={t("Password")}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              variant="outline"
              disabled={isLoading}
              className={cls.loginBtn}
              onClick={onLoginClick}
            >
              {t("Sign in")}
            </Button>
          </Vstack>
        }
      />
    </DynamicModule>
  );
});

export default LoginForm;
