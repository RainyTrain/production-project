import { UiDesignSwitcher } from "features/UiDesignSwitcher";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { Page } from "widgets/Page";

interface SettingPageProps {
  className?: string;
}

export const SettingPage = ({ className }: SettingPageProps) => (
  <Page>
    <Vstack gap="16">
      <UiDesignSwitcher />
    </Vstack>
  </Page>
);

export default SettingPage;
