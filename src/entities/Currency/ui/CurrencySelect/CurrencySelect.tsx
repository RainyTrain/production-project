import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, onChange, value, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const options = useMemo(
      () =>
        Object.entries(Currency).map((opt) => ({
          value: opt[0],
          content: opt[1],
        })),
      []
    );

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <ListBox
        className={classNames("", {}, [className])}
        options={options}
        onChange={onChangeHandler}
        value={value!}
        defaultValue="choose"
        readonly={readOnly}
        direction="top right"
        label="Currency"
      />
    );
  }
);
