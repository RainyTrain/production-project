import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Country } from "../model/consts/consts";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = memo(
  ({ className, value, onChange, readOnly }: CountrySelectProps) => {
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
      <ListBox
        className={classNames("", {}, [className])}
        options={options}
        onChange={onChangeHandler}
        value={value!}
        defaultValue="choose"
        readonly={readOnly}
        direction="top right"
        label="Country"
      />
    );
  }
);
