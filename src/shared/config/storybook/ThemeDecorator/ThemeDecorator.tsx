import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "shared/ui/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
