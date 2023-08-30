import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../ThemeProvider";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
  title: "shared/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Dark: Story = {
  args: {
    text: `import type { Meta, StoryObj } from "@storybook/react";
    import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
    import { Theme } from "shared/ui/ThemeProvider";
    import { Code } from "./Code";
    
    const meta: Meta<typeof Code> = {
      title: "shared/Code",
      component: Code,
      tags: ["autodocs"],
      argTypes: {},
    };
    
    export default meta;
    
    type Story = StoryObj<typeof Code>;
    
    export const Dark: Story = {
      args: {
        text: "hello, test",
      },
      decorators: [ThemeDecorator(Theme.DARK)],
    };
    `,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
