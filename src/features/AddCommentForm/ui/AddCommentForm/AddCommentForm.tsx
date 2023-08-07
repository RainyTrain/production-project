import { getAddCommentFormText } from "features/AddCommentForm/model/selectors/addCommentFromSelectors";
import {
  addCommentActions,
  addCommentReducer,
} from "features/AddCommentForm/model/slice/addCommentSlice";
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
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
          <Input
            value={text}
            onChange={onCommentTextChange}
            placeholder={t("Print your comment")}
            className={cls.input}
          />
          <Button theme={ThemButton.OUTLINE} onClick={sendCommentHandler}>
            {t("Add")}
          </Button>
        </div>
      </DynamicModule>
    );
  }
);

export default AddCommentForm;
