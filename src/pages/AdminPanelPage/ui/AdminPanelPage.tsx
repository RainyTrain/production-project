import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";
import cls from "./AdminPanelPage.module.scss";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => (
  <Page
    data-testid="AdminPage"
    className={classNames(cls.AdminPanelPage, {}, [className])}
  >
    Admin Panel
  </Page>
);

export default AdminPanelPage;
