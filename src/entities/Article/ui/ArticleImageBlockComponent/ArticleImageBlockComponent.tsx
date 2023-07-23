import { ArticleImageBlock } from "entities/Article/model/types/article";
import { classNames } from "shared";
import { Text, TextAlign } from "shared/ui/Text/Text";
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
    {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
  </div>
);
