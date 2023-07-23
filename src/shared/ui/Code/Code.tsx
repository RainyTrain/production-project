import { classNames } from "shared";
import { Button, ThemButton } from "shared/ui/Button/Button";
import CopyIcon from "shared/assets/icons/Copy.svg";
import { memo, useCallback } from "react";
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
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ThemButton.CLEAR} onClick={onCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
