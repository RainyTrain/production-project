import "./styles/index.scss";
import { useTheme } from "shared/ui/ThemeProvider";
import { classNames } from "shared";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button type="button" onClick={() => setIsOpen(true)}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
