import { StoryContext, StoryFn } from "@storybook/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

export const RouterDecorator = (
  Story: StoryFn,
  { parameters: { router } }: StoryContext
) => {
  if (router) {
    const { route, path } = router;
    return (
      <MemoryRouter initialEntries={[encodeURI(route)]}>
        <Routes>
          <Route path={path} element={<Story />} />
        </Routes>
      </MemoryRouter>
    );
  }
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
