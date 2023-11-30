import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => (
  <Page data-testid="AdminPage" className={classNames("", {}, [className])}>
    Admin Panel
  </Page>
);

export default AdminPanelPage;
