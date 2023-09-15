import { useParams } from "react-router-dom";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { Page } from "widgets/Page/Page";
import { Vstack } from "shared/ui/Stack/Vstack/Vstack";
import { EditableProfileCard } from "features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard";
import { profileReducer } from "features/EditableProfileCard/model/slice/profileSlice";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams();

  return (
    <DynamicModule reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames("", {}, [className])}>
        <Vstack gap="16" max justify="between">
          <EditableProfileCard id={id} />
        </Vstack>
      </Page>
    </DynamicModule>
  );
};

export default ProfilePage;
