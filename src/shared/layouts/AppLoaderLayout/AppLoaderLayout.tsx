import { Skeleton } from "shared/ui/Redesigned/Skeleton";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { MainLayout } from "../MainLayout/MainLayout";
import cls from "./AppLoaderLayout.module.scss";

export const AppLoaderLayout = () => (
  <MainLayout
    header={
      <Hstack className={cls.header}>
        <Skeleton width={40} height={40} border="50%" />
      </Hstack>
    }
    content={
      <Vstack gap="16" style={{ height: "100%" }}>
        <Skeleton width="70%" height={32} border="16px" />
        <Skeleton width="40%" height={20} border="16px" />
        <Skeleton width="50%" height={20} border="16px" />
        <Skeleton width="30%" height={32} border="16px" />
        <Skeleton width="80%" height="40%" border="16px" />
        <Skeleton width="80%" height="40%" border="16px" />
      </Vstack>
    }
    sidebar={<Skeleton width={220} height="100%" border="32px" />}
  />
);
