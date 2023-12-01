import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useDetectDevice } from "shared/lib/hooks/useDetectDevice/useDetectDevice";
import { Button, ThemButton } from "shared/ui/Deprecated/Button";
import { Card } from "shared/ui/Deprecated/Card";
import { Drawer } from "shared/ui/Deprecated/Drawer";
import { Input } from "shared/ui/Deprecated/Input";
import { Modal } from "shared/ui/Deprecated/Modal";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { StarRating } from "shared/ui/Deprecated/StarRating";
import { Text } from "shared/ui/Deprecated/Text";

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

  return (
    <Card data-testId="RatingCard" className={classNames("", {}, [className])}>
      <Vstack align="center" gap="8">
        <Text title={starsCount ? "Thank you!" : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </Vstack>
      {device === "PC" ? (
        <Modal isOpen={isModalOpen} lazy onClose={onCloseModal}>
          <Vstack max gap="32">
            <Text title={feedbackTitle} />
            <Input
              data-testId="RatingCard.Input"
              placeholder={t("Your feedback")}
              value={feedback}
              onChange={setFeedback}
            />
          </Vstack>
          <Hstack max gap="16" justify="end">
            <Button
              data-testId="RatingCard.Close"
              theme={ThemButton.OUTLINE_RED}
              onClick={cancelHandler}
            >
              {t("Close")}
            </Button>
            <Button data-testId="RatingCard.Send" onClick={acceptHandler}>
              {t("Save")}{" "}
            </Button>
          </Hstack>
        </Modal>
      ) : (
        <Drawer onClose={cancelHandler} isOpen={isModalOpen} lazy>
          <Vstack max gap="32">
            <Text title={feedbackTitle} />
            <Input placeholder={t("Your feedback")} />
          </Vstack>
          <Hstack max gap="16" justify="end">
            <Button onClick={acceptHandler}>{t("Save")} </Button>
          </Hstack>
        </Drawer>
      )}
    </Card>
  );
});
