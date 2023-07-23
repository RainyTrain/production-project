import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "entities/Article/model/selectors/getArticleSelector";
import { getArticleById } from "entities/Article/model/services/getArticleById";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import CalendarIcon from "shared/assets/icons/Calendar.svg";
import ViewIcon from "shared/assets/icons/View.svg";
import { Icon } from "shared/ui/Icon/Icon";
import {
  ArticleBlock,
  ArticleBlockType,
} from "entities/Article/model/types/article";
import cls from "./articleDetails.module.scss";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleIsLoading);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent className={cls.block} block={block} />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent className={cls.block} block={block} />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent className={cls.block} block={block} />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          border="50%"
          height="200px"
          width="200px"
        />
        <Skeleton className={cls.title} height="32px" width="300px" />
        <Skeleton className={cls.skeleton} height="24px" width="600px" />
        <Skeleton className={cls.skeleton} height="200px" width="100%" />
        <Skeleton className={cls.skeleton} height="200px" width="100%" />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.LEFT}
        text="Error occured while loading article"
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size="200px" src={article?.img} />
        </div>
        <Text
          text={article?.title}
          title={article?.subtitle}
          align={TextAlign.LEFT}
          className={cls.title}
          size={TextSize.L}
        />
        <div />
        <div className={cls.articleInfo}>
          <Icon Icon={ViewIcon} className={cls.icon} />
          <Text text={String(article?.views)} align={TextAlign.LEFT} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Icon={CalendarIcon} className={cls.icon} />
          <Text text={String(article?.createdAt)} align={TextAlign.LEFT} />
        </div>
        <div>{article?.blocks.map(renderBlock)}</div>
      </>
    );
  }

  return (
    <DynamicModule reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModule>
  );
});
