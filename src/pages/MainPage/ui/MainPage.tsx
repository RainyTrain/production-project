import { RatingCard } from "entities/Rating";
// eslint-disable-next-line rainytrain-fsd-plugin/public-api-imports
import { userUseActions } from "entities/User/model/slice/userSlice";
import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { Page } from "widgets/Page";
import "./style.scss";

const MainPage = () => {
  const { t } = useTranslation();

  const { sayHi } = userUseActions();

  const hadleGreet = useCallback(() => {
    sayHi();
  }, [sayHi]);

  useEffect(() => {
    hadleGreet();
  }, [hadleGreet]);

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  if (__PROJECT__ !== "jest") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInfiniteScroll({
      callback: () => {
        console.log("Load new items!");
      },
      triggerRef,
      wrapperRef,
    });
  }

  return (
    <Page data-testid="MainPage">
      <div ref={wrapperRef} className="wrapper">
        {t("Main Page")}
        <RatingCard
          title="qwerty"
          feedbackTitle="Leave your feedback"
          hasBeedback
        />
        <div className="trigger" ref={triggerRef}>
          Trigger
        </div>
      </div>
    </Page>
  );
};

export default MainPage;
