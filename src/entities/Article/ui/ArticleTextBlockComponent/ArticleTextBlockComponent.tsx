import { ToggleFeatures } from "shared/features";
import { classNames } from "shared/lib/classNames/classNames";
import { Text as TextDeprecated, TextAlign } from "shared/ui/Deprecated/Text";
import { Text } from "shared/ui/Redesigned/Text";
import { ArticleTextBlock } from "../../model/types/article";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({
  className,
  block,
}: ArticleTextBlockComponentProps) => (
  <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
    {block.title && (
      <ToggleFeatures
        feature="isAppReDesigned"
        off={<TextDeprecated title={block.title} className={cls.title} />}
        on={<Text title={block.title} className={cls.title} />}
      />
    )}
    {block.paragraphs.map((paragraph) => (
      <ToggleFeatures
        feature="isAppReDesigned"
        off={
          <TextDeprecated
            text={paragraph}
            key={paragraph}
            className={cls.paragraph}
            align={TextAlign.LEFT}
          />
        }
        on={
          <Text
            text={paragraph}
            key={paragraph}
            className={cls.paragraph}
            align={TextAlign.LEFT}
          />
        }
      />
    ))}
  </div>
);
