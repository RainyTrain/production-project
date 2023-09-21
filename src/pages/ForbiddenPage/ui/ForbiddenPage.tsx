import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page/Page";
import cls from "./ForbiddenPage.module.scss";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => (
  <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
    Forbidden page
  </Page>
);

export default ForbiddenPage;
