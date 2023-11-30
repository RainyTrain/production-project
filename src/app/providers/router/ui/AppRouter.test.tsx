import {
  getAboutPage,
  getAdminPanelPage,
  getProfilePage,
} from "shared/const/router";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { screen } from "@testing-library/react";
import { UserRole } from "entities/User";
import AppRouter from "./AppRouter";

describe("app/router/AppRouter", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("basic page render", async () => {
    componentRender(<AppRouter />, { route: getAboutPage() });

    const page = await screen.findByTestId("AboutPage");

    expect(page).toBeInTheDocument();
  });

  test("page not found", async () => {
    componentRender(<AppRouter />, { route: "/error" });

    const page = await screen.findByTestId("NotFoundPage");

    expect(page).toBeInTheDocument();
  });

  test("to non authorised user", async () => {
    componentRender(<AppRouter />, { route: getProfilePage("1") });

    const page = await screen.findByTestId("MainPage");

    expect(page).toBeInTheDocument();
  });

  test("to authorised user", async () => {
    componentRender(<AppRouter />, {
      route: getProfilePage("1"),
      initialState: { user: { authData: { id: "1" } } },
    });

    const page = await screen.findByTestId("ProfilePage");

    expect(page).toBeInTheDocument();
  });

  test("forbidden page", async () => {
    componentRender(<AppRouter />, {
      route: getAdminPanelPage(),
      initialState: { user: { authData: {} } },
    });

    const page = await screen.findByTestId("ForbiddenPage");

    expect(page).toBeInTheDocument();
  });

  test("admin page", async () => {
    componentRender(<AppRouter />, {
      route: getAdminPanelPage(),
      initialState: { user: { authData: { roles: [UserRole.ADMIN] } } },
    });

    const page = await screen.findByTestId("AdminPage");

    expect(page).toBeInTheDocument();
  });
});
