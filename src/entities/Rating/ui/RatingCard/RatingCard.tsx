import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useDetectDevice } from "shared/lib/hooks/useDetectDevice/useDetectDevice";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { Card as CardDeprecated } from "shared/ui/Deprecated/Card";
import { Drawer } from "shared/ui/Redesigned/Drawer";
import { Input as InputDeprecated } from "shared/ui/Deprecated/Input";
import { Modal } from "shared/ui/Redesigned/Modal";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { StarRating } from "shared/ui/Deprecated/StarRating";
import { Text as TextDeprecated } from "shared/ui/Deprecated/Text";
import { ToggleFeatures } from "shared/features";
import { Text } from "shared/ui/Redesigned/Text";
import { Input } from "shared/ui/Redesigned/Input";
import { Button } from "shared/ui/Redesigned/Button";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import { Card as CardRedesigned } from "shared/ui/Redesigned/Card";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasBeedback?: boolean;
  rate?: number;
  onCanel?: (startCount: number) => void;
  onAccept?: (startCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasBeedback,
    rate = 0,
    onCanel,
    onAccept,
  } = props;

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState("");

  const { device } = useDetectDevice();

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onSelectStars = (selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasBeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  };

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCanel?.(starsCount);
  }, [onCanel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testId="RatingCard.Input"
            placeholder={t("Your feedback")}
            value={feedback}
            onChange={setFeedback}
          />
        </>
      }
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testId="RatingCard.Input"
            placeholder={t("Your feedback")}
            value={feedback}
            onChange={setFeedback}
          />
        </>
      }
    />
  );

  const Card = toggleFeature({
    name: "isAppReDesigned",
    off: () => CardDeprecated,
    on: () => CardRedesigned,
  });

  return (
    <Card
      data-testId="RatingCard"
      className={classNames("", {}, [className])}
      fulllWidth
      border="round"
      padding="24"
    >
      <Vstack align="center" gap="8">
        <ToggleFeatures
          feature="isAppReDesigned"
          off={<TextDeprecated title={starsCount ? "Thank you!" : title} />}
          on={<Text title={starsCount ? "Thank you!" : title} />}
        />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </Vstack>
      {device === "PC" ? (
        <Modal isOpen={isModalOpen} lazy onClose={onCloseModal}>
          <Vstack max gap="32">
            {modalContent}
          </Vstack>
          <ToggleFeatures
            feature="isAppReDesigned"
            off={
              <Hstack max gap="16" justify="end">
                <ButtonDeprecated
                  data-testId="RatingCard.Close"
                  theme={ThemButton.OUTLINE_RED}
                  onClick={cancelHandler}
                >
                  {t("Close")}
                </ButtonDeprecated>
                <ButtonDeprecated
                  data-testId="RatingCard.Send"
                  onClick={acceptHandler}
                >
                  {t("Save")}{" "}
                </ButtonDeprecated>
              </Hstack>
            }
            on={
              <Hstack max gap="16" justify="end">
                <Button
                  data-testId="RatingCard.Close"
                  variant="outline"
                  onClick={cancelHandler}
                >
                  {t("Close")}
                </Button>
                <Button data-testId="RatingCard.Send" onClick={acceptHandler}>
                  {t("Save")}{" "}
                </Button>
              </Hstack>
            }
          />
        </Modal>
      ) : (
        <Drawer onClose={cancelHandler} isOpen={isModalOpen} lazy>
          <Vstack max gap="32">
            {modalContent}
          </Vstack>
          <Hstack max gap="16" justify="end">
            <ToggleFeatures
              feature="isAppReDesigned"
              off={
                <ButtonDeprecated onClick={acceptHandler}>
                  {t("Save")}
                </ButtonDeprecated>
              }
              on={
                <Button onClick={acceptHandler} size="size_L">
                  {t("Save")}
                </Button>
              }
            />
          </Hstack>
        </Drawer>
      )}
    </Card>
  );
});