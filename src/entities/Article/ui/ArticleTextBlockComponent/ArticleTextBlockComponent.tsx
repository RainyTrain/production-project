import { ArticleTextBlock } from "entities/Article/model/types/article";
import { classNames } from "shared";
import { Text, TextAlign } from "shared/ui/Text/Text";
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
    {block.title && <Text title={block.title} className={cls.title} />}
    {block.paragraphs.map((paragraph) => (
      <Text
        text={paragraph}
        key={paragraph}
        className={cls.paragraph}
        align={TextAlign.LEFT}
      />
    ))}
  </div>
);
