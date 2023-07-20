import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(({
  className,
  onChange,
  value,
  readOnly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const options = useMemo(
    () =>
      Object.entries(Currency).map((opt) => ({
        value: opt[0],
        content: opt[1],
      })),
    []
  );

  const onChangeHadler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", {}, [className])}
      label={t("Currency")}
      onChange={onChangeHadler}
      options={options}
      value={value}
      readOnly={readOnly}
    />
  );
});
