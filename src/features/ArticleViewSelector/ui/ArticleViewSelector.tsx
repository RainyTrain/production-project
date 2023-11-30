import { classNames } from "shared/lib/classNames/classNames";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import Big from "shared/assets/icons/Big.svg";
import Small from "shared/assets/icons/Small.svg";
import Burger from "shared/assets/icons/Burger.svg";
import Tile from "shared/assets/icons/Tile.svg";
import { Icon as IconDeprecated } from "shared/ui/Deprecated/Icon";
import { ArticleView } from "entities/Article";
import { toggleFeature } from "shared/features/toggleFeature";
import { ToggleFeatures } from "shared/features";
import { Button } from "shared/ui/Redesigned/Button";
import { Icon } from "shared/ui/Redesigned/Icon";
import { Card } from "shared/ui/Redesigned/Card";
import { Hstack } from "shared/ui/Redesigned/Stack";
import cls from "./ArticleViewSelector.module.scss";

interface ViewTypes {
  view: ArticleView;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (arg: ArticleView) => void;
}

export const ArticleViewSelector = ({
  className,
  view,
  onViewClick,
}: ArticleViewSelectorProps) => {
  const viewTypes: ViewTypes[] = [
    {
      view: "SMALL",
      icon: toggleFeature({
        name: "isAppReDesigned",
        off: () => Small,
        on: () => Burger,
      }),
    },
    {
      view: "BIG",
      icon: toggleFeature({
        name: "isAppReDesigned",
        off: () => Big,
        on: () => Tile,
      }),
    },
  ];

  const onClick = (newView: ArticleView) => () => {
    onViewClick(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <div>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              theme={ThemButton.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Icon={viewType.icon}
                className={classNames(
                  "",
                  { [cls.NotSelected]: viewType.view !== view },
                  []
                )}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
      on={
        <Card
          border="round"
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [])}
        >
          <Hstack gap="8">
            {viewTypes.map((viewType) => (
              <Button variant="clear" onClick={onClick(viewType.view)}>
                <Icon
                  Icon={viewType.icon}
                  className={classNames(
                    "",
                    { [cls.NotSelected]: viewType.view !== view },
                    []
                  )}
                  clickable
                  onClick={onClick(viewType.view)}
                />
              </Button>
            ))}
          </Hstack>
        </Card>
      }
    />
  );
};
