import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Avatar } from "shared/ui/Deprecated/Avatar";
import { Skeleton as SkeletonDeprecated } from "shared/ui/Deprecated/Skeleton";
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme,
} from "shared/ui/Deprecated/Text";
import CalendarIcon from "shared/assets/icons/Calendar.svg";
import ViewIcon from "shared/assets/icons/View.svg";
import { Icon } from "shared/ui/Deprecated/Icon";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { classNames } from "shared/lib/classNames/classNames";
import { ToggleFeatures } from "shared/features";
import { Text } from "shared/ui/Redesigned/Text";
import { AppImage } from "shared/ui/Redesigned/AppImage/AppImage";
import { Skeleton as SkeletonRedesigned } from "shared/ui/Redesigned/Skeleton";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import { ArticleBlockType } from "../../model/consts/consts";
import { ArticleBlock } from "../../model/types/article";
import { getArticleById } from "../../model/services/getArticleById/getArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice/articleDetailsSlice";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "../../model/selectors/getArticleSelector";
import cls from "./ArticleDetails.module.scss";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent className={cls.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent className={cls.block} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent className={cls.block} block={block} />;
    default:
      return null;
  }
};

const Deprecated = () => {
  const article = useSelector(getArticleData);
  return (
    <>
      <Hstack className={cls.avatarWrapper} justify="center" max>
        <Avatar size="200px" src={article?.img} />
      </Hstack>
      <TextDeprecated
        title={article?.title}
        text={article?.subtitle}
        align={TextAlign.LEFT}
        className={cls.title}
        size={TextSize.M}
      />
      <div />
      <Hstack className={cls.articleInfo} data-testId="ArticleDetails.Info">
        <Icon Icon={ViewIcon} className={cls.icon} />
        <TextDeprecated
          text={String(article?.views)}
          align={TextAlign.LEFT}
          size={TextSize.M}
        />
      </Hstack>
      <Hstack className={cls.articleInfo}>
        <Icon Icon={CalendarIcon} className={cls.icon} />
        <TextDeprecated
          text={String(article?.createdAt)}
          align={TextAlign.LEFT}
          size={TextSize.M}
        />
      </Hstack>
      <div>{article?.blocks?.map(renderArticleBlock)}</div>
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleData);
  return (
    <>
      <Text title={article?.title} align={TextAlign.LEFT} size="l" bold />
      <Text title={article?.subtitle} align={TextAlign.LEFT} />
      <AppImage
        fallback={
          <SkeletonRedesigned width="100%" height="420px" border="16px" />
        }
        src={article?.img}
        className={cls.img}
      />
      <div>{article?.blocks?.map(renderArticleBlock)}</div>
    </>
  );
};

const Skeletons = () => {
  const Skeleton = toggleFeature({
    name: "isAppReDesigned",
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
  });

  return (
    <Vstack gap="16" max>
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
    </Vstack>
  );
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  const { t } = useTranslation();

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(getArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = <Skeletons />;
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.LEFT}
        text="Error occured while loading article"
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppReDesigned"
        off={<Deprecated />}
        on={<Redesigned />}
      />
    );
  }

  return (
    <DynamicModule reducers={reducers} removeAfterUnmount>
      <Vstack
        gap="8"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </Vstack>
    </DynamicModule>
  );
});
