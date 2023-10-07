import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemButton } from "shared/ui/Button/Button";
import Big from "shared/assets/icons/Big.svg";
import Small from "shared/assets/icons/Small.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleView } from "../../model/types/article";
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
      icon: Small,
    },
    {
      view: "BIG",
      icon: Big,
    },
  ];

  const onClick = (newView: ArticleView) => () => {
    onViewClick(newView);
  };

  return (
    <div>
      {viewTypes.map((viewType) => (
        <Button theme={ThemButton.CLEAR} onClick={onClick(viewType.view)}>
          <Icon
            Icon={viewType.icon}
            className={classNames(
              "",
              { [cls.NotSelected]: viewType.view !== view },
              []
            )}
          />
        </Button>
      ))}
    </div>
  );
};
