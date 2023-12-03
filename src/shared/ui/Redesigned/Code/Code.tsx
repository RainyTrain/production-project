import { classNames } from "shared/lib/classNames/classNames";
import CopyIcon from "shared/assets/icons/Copy.svg";
import CopyIconNew from "shared/assets/icons/copyNew.svg";
import { memo, useCallback } from "react";
import { ToggleFeatures } from "shared/features";
import { Icon } from "../Icon";
import { Button, ThemButton } from "../../Deprecated/Button/Button";
import cls from "./Code.module.scss";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button
            className={cls.copyBtn}
            theme={ThemButton.CLEAR}
            onClick={onCopy}
          >
            <CopyIcon className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            className={cls.copyBtn}
            clickable
            onClick={onCopy}
            Icon={CopyIconNew}
          >
            <CopyIcon className={cls.copyIcon} />
          </Icon>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
