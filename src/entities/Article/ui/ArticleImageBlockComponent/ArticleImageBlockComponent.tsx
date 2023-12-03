import { ToggleFeatures } from "shared/features";
import { classNames } from "shared/lib/classNames/classNames";
import { Text as TextDeprecated, TextAlign } from "shared/ui/Deprecated/Text";
import { Text } from "shared/ui/Redesigned/Text";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
  className,
  block,
}: ArticleImageBlockComponentProps) => (
  <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    <img src={block.src} className={cls.img} alt={block.title} />
    {block.title && (
      <ToggleFeatures
        feature="isAppReDesigned"
        off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
        on={<Text text={block.title} align={TextAlign.CENTER} />}
      />
    )}
  </div>
);
