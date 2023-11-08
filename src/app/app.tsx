import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInited, initAuthData } from "entities/User";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { PageLoader } from "widgets/PageLoader";
import { ToggleFeatures } from "shared/features";
import { MainLayout } from "shared/layouts";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <div className={classNames("app", {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
      on={
        <div className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              sidebar={<Sidebar />}
              content={<AppRouter />}
              toolbar={<div>Toolbar</div>}
              header={<Navbar />}
            />
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
