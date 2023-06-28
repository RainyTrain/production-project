import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModule reducers={initialReducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModule>
  );
};

export default ProfilePage;
