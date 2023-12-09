import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInited, initAuthData } from "entities/User";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { ToggleFeatures } from "shared/features";
import { MainLayout } from "shared/layouts";
import { AppLoaderLayout } from "shared/layouts/AppLoaderLayout/AppLoaderLayout";
import { PageLoader } from "widgets/PageLoader";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppReDesigned"
        off={<PageLoader />}
        on={
          <div id="app" className={classNames("app_redesigned", {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <div id="app" className={classNames("app", {}, [theme])}>
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
        <div id="app" className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              sidebar={<Sidebar />}
              content={<AppRouter />}
              // eslint-disable-next-line react/jsx-no-useless-fragment
              toolbar={<></>}
              header={<Navbar />}
            />
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
