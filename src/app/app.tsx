import { useTheme } from "shared/ui/ThemeProvider";
import { classNames } from "shared";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
