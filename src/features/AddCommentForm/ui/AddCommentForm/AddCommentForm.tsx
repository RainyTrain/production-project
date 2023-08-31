import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Hstack } from "shared/ui/Stack/Hstack/Hstack";
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
        <Hstack
          className={classNames(cls.AddCommentForm, {}, [className])}
          align="center"
          justify="between"
        >
          <Input
            value={text}
            onChange={onCommentTextChange}
            placeholder={t("Print your comment")}
            className={cls.input}
          />
          <Button theme={ThemButton.OUTLINE} onClick={sendCommentHandler}>
            {t("Add")}
          </Button>
        </Hstack>
      </DynamicModule>
    );
  }
);

export default AddCommentForm;
