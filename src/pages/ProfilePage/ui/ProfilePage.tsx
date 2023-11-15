import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { Vstack } from "shared/ui/Deprecated/Stack";
import {
  EditableProfileCard,
  profileReducer,
} from "features/EditableProfileCard";
import { Page } from "widgets/Page";

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
      <Page
        data-testid="ProfilePage"
        className={classNames("", {}, [className])}
      >
        <Vstack gap="16" max justify="between">
          <EditableProfileCard id={id} />
        </Vstack>
      </Page>
    </DynamicModule>
  );
};

export default ProfilePage;
