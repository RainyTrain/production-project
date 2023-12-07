import "app/styles/index.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "shared/ui/Deprecated/ThemeProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import App from "app/app";
import { StoreProvider } from "app/providers/StoreProvider";
import { ForceUpdateProvider } from "shared/lib/rerender/forceUpdate";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <ForceUpdateProvider>
            <App />
          </ForceUpdateProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
