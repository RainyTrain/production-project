import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModule reducers={initialReducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>{t("Profile page")}</div>
    </DynamicModule>
  );
};

export default ProfilePage;
