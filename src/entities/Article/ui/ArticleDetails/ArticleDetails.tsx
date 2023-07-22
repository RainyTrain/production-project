import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "entities/Article/model/selectors/getArticleSelector";
import { getArticleById } from "entities/Article/model/services/getArticleById";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import cls from "./articleDetails.module.scss";

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
    console.log("done");
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
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
      </div>
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
      <div>
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
      </div>
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
