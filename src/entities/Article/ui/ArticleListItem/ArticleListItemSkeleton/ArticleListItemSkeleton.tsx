import { toggleFeature } from "shared/features/lib/toggleFeature";
import { classNames } from "shared/lib/classNames/classNames";
import { Card as CardDeprecated } from "shared/ui/Deprecated/Card";
import { Card as CardRedesigned } from "shared/ui/Redesigned/Card";
import { Skeleton as SkeletonDeprecated } from "shared/ui/Deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "shared/ui/Redesigned/Skeleton";
import { ToggleFeatures } from "shared/features";
import { ArticleView } from "../../../model/types/article";
import cls from "../ArticleListIem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = (
  props: ArticleListItemSkeletonProps
) => {
  const { className, view = "SMALL" } = props;

  const mainClass = toggleFeature({
    name: "isAppReDesigned",
    off: () => cls.ArticleListItem,
    on: () => cls.ArticleListItemRedesigned,
  });

  const Skeleton = toggleFeature({
    name: "isAppReDesigned",
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
  });

  const Card = toggleFeature({
    name: "isAppReDesigned",
    off: () => CardDeprecated,
    on: () => CardRedesigned,
  });

  if (view === "BIG") {
    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" className={cls.img} />
            <Skeleton width={150} height={16} className={cls.usename} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    // <div className={classNames(mainClass, {}, [className, cls[view]])}>
    //   <Card>
    //     <div className={cls.imageWrapper}>
    //       <Skeleton width={150} height={150} border="50%" className={cls.img} />
    //     </div>
    //     <div className={cls.inforWrapper}>
    //       <Skeleton width={130} height={16} className={cls.types} />
    //     </div>
    //     <Skeleton width={150} height={16} className={cls.title} />
    //   </Card>
    // </div>
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card>
            <div className={cls.imageWrapper}>
              <Skeleton width={150} height="140px" className={cls.img} />
            </div>
            <div className={cls.inforWrapper}>
              <Skeleton width={130} height={16} className={cls.types} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
          </Card>
        </div>
      }
      on={
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card className={cls.card} border='round'>
            <Skeleton width="100%" height="50%" />
            <div className={cls.inforWrapper}>
              <Skeleton width={130} height={16} className={cls.types} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
          </Card>
        </div>
      }
    />
  );
};
