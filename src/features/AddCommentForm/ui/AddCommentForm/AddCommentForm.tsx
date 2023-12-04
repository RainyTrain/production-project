import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { Input as InputDeprecated } from "shared/ui/Deprecated/Input";
import { Hstack } from "shared/ui/Redesigned/Stack";
import { ToggleFeatures } from "shared/features";
import { Input } from "shared/ui/Redesigned/Input";
import { Button } from "shared/ui/Redesigned/Button";
import { Card } from "shared/ui/Redesigned/Card";
import {
  addCommentActions,
  addCommentReducer,
} from "../../model/slice/addCommentSlice";
import { getAddCommentFormText } from "../../model/selectors/addCommentFromSelectors";
import cls from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (arg: string) => void;
}

const reducers: ReducerList = {
  addComment: addCommentReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();

    const text = useSelector(getAddCommentFormText);

    const error = useSelector(getAddCommentFormText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (arg: string) => {
        dispatch(addCommentActions.setText(arg));
      },
      [dispatch]
    );

    const sendCommentHandler = useCallback(() => {
      onSendComment(text!);
      onCommentTextChange("");
    }, [onSendComment, onCommentTextChange, text]);

    return (
      <DynamicModule reducers={reducers} removeAfterUnmount>
        <ToggleFeatures
          feature="isAppReDesigned"
          off={
            <Hstack
              className={classNames(cls.AddCommentForm, {}, [className])}
              align="center"
              justify="between"
              data-testId="AddCommentForm"
            >
              <InputDeprecated
                value={text}
                onChange={onCommentTextChange}
                placeholder={t("Print your comment")}
                className={cls.input}
              />
              <ButtonDeprecated
                theme={ThemButton.OUTLINE}
                onClick={sendCommentHandler}
              >
                {t("Add")}
              </ButtonDeprecated>
            </Hstack>
          }
          on={
            <Card padding="24" border="round" fulllWidth>
              <Hstack
                className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
                align="center"
                justify="between"
                data-testId="AddCommentForm"
                gap="16"
              >
                <Input
                  value={text}
                  onChange={onCommentTextChange}
                  placeholder={t("Print your comment")}
                  className={cls.input}
                />
                <Button variant="outline" onClick={sendCommentHandler}>
                  {t("Add")}
                </Button>
              </Hstack>
            </Card>
          }
        />
      </DynamicModule>
    );
  }
);

export default AddCommentForm;
