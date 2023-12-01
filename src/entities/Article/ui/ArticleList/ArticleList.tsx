/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */

import {
  HTMLAttributeAnchorTarget,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from "react-virtuoso";
import { classNames } from "shared/lib/classNames/classNames";
import { USE_SESSIONSTORAGE_POSITION } from "shared/const/sessionStorage";
import { Text, TextAlign, TextTheme } from "shared/ui/Deprecated/Text";
import { ToggleFeatures } from "shared/features";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  isTarget?: boolean;
  target?: HTMLAttributeAnchorTarget;
  onLoadNextPath?: () => void;
  height?: string;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = "SMALL",
    target,
    isTarget,
    onLoadNextPath,
    height,
  } = props;

  const [position, setPosition] = useState<number>(1);

  const ref = useRef<VirtuosoGridHandle>(null);
  const timeOut = useRef<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem(USE_SESSIONSTORAGE_POSITION) ?? 1;
    setPosition(+data);
  }, []);

  useEffect(() => {
    if (view === "SMALL") {
      timeOut.current = setTimeout(() => {
        if (ref.current) {
          ref.current.scrollToIndex(position);
        }
      }, 100);
    }
    return () => {
      clearTimeout(timeOut.current);
    };
  }, [position, view]);

  const renderArticle = (index: number, article: Article) => (
    <div key={index} style={{ marginBottom: "10px" }}>
      <ArticleListItem
        isTarget
        key={article.title}
        article={article}
        view={view}
        target={target}
        positionIndex={index}
      />
    </div>
  );

  const getSkeletons = (view: ArticleView) =>
    new Array(view === "BIG" ? 4 : 9)
      .fill(0)
      .map((element, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
      ));

  const Footer = memo(() => {
    if (isLoading) {
      return <div>{getSkeletons(view)}</div>;
    }
    return null;
  });

  if (!isLoading && !articles?.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title="No articles found"
        />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <div
          data-testId="ArticleList"
          style={{ height: height || "calc(100vh - var(--navbar-height))" }}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {view === "BIG" ? (
            <Virtuoso
              style={{
                height: !height ? "100%" : height,
              }}
              data={articles}
              components={{ Footer }}
              endReached={onLoadNextPath}
              totalCount={500}
              initialTopMostItemIndex={position}
              itemContent={renderArticle}
            />
          ) : (
            <VirtuosoGrid
              ref={ref}
              style={{
                height: !height ? "100%" : height,
              }}
              components={{
                ScrollSeekPlaceholder: () => (
                  <div className={cls.itemContainer}>
                    <ArticleListItemSkeleton view={view} />
                  </div>
                ),
              }}
              data={articles}
              itemContent={renderArticle}
              listClassName={cls.listContainer}
              endReached={onLoadNextPath}
              scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 200,
                exit: (velocity) => Math.abs(velocity) < 30,
              }}
            />
          )}
        </div>
      }
      on={
        <div
          data-testId="ArticleList"
          style={{ height: height || "calc(100vh - var(--navbar-height))" }}
          className={classNames(cls.ArticleListRedesigned, {}, [])}
        >
          {view === "BIG" ? (
            <Virtuoso
              style={{
                height: !height ? "100%" : height,
              }}
              data={articles}
              components={{ Footer }}
              endReached={onLoadNextPath}
              totalCount={500}
              initialTopMostItemIndex={position}
              itemContent={renderArticle}
            />
          ) : (
            <VirtuosoGrid
              ref={ref}
              style={{
                height: !height ? "100%" : height,
              }}
              components={{
                ScrollSeekPlaceholder: () => (
                  <div className={cls.itemContainer}>
                    <ArticleListItemSkeleton view={view} />
                  </div>
                ),
              }}
              data={articles}
              itemContent={renderArticle}
              listClassName={cls.listContainer}
              endReached={onLoadNextPath}
              scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 200,
                exit: (velocity) => Math.abs(velocity) < 30,
              }}
            />
          )}
        </div>
      }
    />
  );
});
