import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ToggleFeatures } from "shared/features";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import { Icon } from "../../Redesigned/Icon";
import { Icon as IconDeprecated } from "../Icon/Icon";
import cls from "./StarRating.module.scss";
import StarRatingIcon from "../../../assets/icons/StarRating.svg";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;

  const [hovered, setHovered] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (startCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(startCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (startCount: number) => () => {
    if (!isSelected) {
      onSelect?.(startCount);
      setIsSelected(true);
      setCurrentStarsCount(startCount);
    }
  };

  return (
    <div
      className={classNames(
        toggleFeature({
          name: "isAppReDesigned",
          off: () => cls.StarRating,
          on: () => cls.StarRatingRedesigned,
        }),
        {},
        [className]
      )}
    >
      {stars.map((starNumber) => {
        const commonProps = {
          className: classNames(
            cls.starIcon,
            { [cls.hovered]: hovered, [cls.selected]: isSelected },
            [currentStarsCount >= starNumber ? cls.hovered : cls.normal]
          ),
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          "data-testId": `StarRating.${starNumber}`,
          "data-selected": currentStarsCount >= starNumber,
        };

        return (
          <ToggleFeatures
            feature="isAppReDesigned"
            off={<IconDeprecated Icon={StarRatingIcon} {...commonProps} />}
            on={
              <Icon
                Icon={StarRatingIcon}
                {...commonProps}
                clickable={!isSelected}
              />
            }
          />
        );
      })}
    </div>
  );
};
