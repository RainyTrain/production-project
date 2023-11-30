describe("articles list", () => {
  beforeEach(() => {
    cy.login("admin", "123").then(() => {
      cy.visit("articles");
    });
  });

  it("open ArticleList", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
});
