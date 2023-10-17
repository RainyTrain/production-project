import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code";
import { ArticleCodeBlock } from "../../model/types/article";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => (
    <div className={classNames("", {}, [className])}>
      <Code text={block.code} />
    </div>
  )
);
