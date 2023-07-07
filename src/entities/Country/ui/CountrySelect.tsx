import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = ({
  className,
  value,
  onChange,
  readOnly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const options = useMemo(
    () =>
      Object.entries(Country).map((opt) => ({
        value: opt[0],
        content: opt[1],
      })),
    []
  );

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", {}, [className])}
      options={options}
      onChange={onChangeHandler}
      readOnly={readOnly}
      value={value}
      label={t('Country')}
    />
  );
};
