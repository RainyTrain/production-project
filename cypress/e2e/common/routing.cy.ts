import { selectByTestId } from "../../helpers/selectByTestId";

describe("routing", () => {
  describe("authorised", () => {
    beforeEach(() => {
      cy.login("admin", "123");
    });

    it("visit MainPage", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("visit profile page", () => {
      cy.visit("/profile/1");
      cy.wait(1000);
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });

    it("visit articles page", () => {
      cy.visit("/articles");
      cy.wait(1000);
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });

  describe("not authorised", () => {
    it("visit main page", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("visit profile page", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("visit not found page", () => {
      cy.visit("/notfound");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });
});
