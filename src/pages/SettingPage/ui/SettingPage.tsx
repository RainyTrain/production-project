import { UiDesignSwitcher } from "features/UiDesignSwitcher";
import { Text } from "shared/ui/Deprecated/Text";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { Page } from "widgets/Page";

interface SettingPageProps {
  className?: string;
}

export const SettingPage = ({ className }: SettingPageProps) => (
  <Page>
    <Vstack gap="16">
      <Text text="settings" />
      <UiDesignSwitcher />
    </Vstack>
  </Page>
);

export default SettingPage;
