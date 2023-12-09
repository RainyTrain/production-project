import { getUserAuthData } from "entities/User";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getFeatureFlags, updateFeatureFlags } from "shared/features";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { ListBox } from "shared/ui/Redesigned/Popups";
import { Skeleton } from "shared/ui/Redesigned/Skeleton";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { Text } from "shared/ui/Redesigned/Text";

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = ({ className }: UiDesignSwitcherProps) => {
  const isAppRedesigned = getFeatureFlags("isAppReDesigned");

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const [isLoading, setIsLOading] = useState(false);

  const options = [
    { value: "new", content: "new" },
    { value: "old", content: "old" },
  ];

  const onChange = useCallback(
    async (value: string) => {
      if (authData) {
        setIsLOading(true);
        await dispatch(
          updateFeatureFlags({
            newFeatures: { isAppReDesigned: value === "new" },
            userId: authData?.id,
          })
        ).unwrap();
        setIsLOading(false);
      }
    },
    [authData, dispatch]
  );

  return (
    <Vstack>
      <Text text="Interface variant: " />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          label="Interface "
          value={isAppRedesigned ? "new" : "old"}
          options={options}
          className={classNames("", {}, [className])}
          onChange={onChange}
          direction="top"
        />
      )}
    </Vstack>
  );
};
