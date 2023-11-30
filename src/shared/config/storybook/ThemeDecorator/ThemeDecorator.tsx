import { StoryFn } from "@storybook/react";
import { Theme } from "../../../const/theme";
import { ThemeProvider } from "../../../ui/Deprecated/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
