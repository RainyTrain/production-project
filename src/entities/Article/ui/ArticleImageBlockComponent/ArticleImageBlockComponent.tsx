import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Deprecated/Text";
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
    {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
  </div>
);
