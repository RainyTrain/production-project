import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => (
  <Page data-testid="ForbiddenPage" className={classNames("", {}, [className])}>
    Forbidden page
  </Page>
);

export default ForbiddenPage;
