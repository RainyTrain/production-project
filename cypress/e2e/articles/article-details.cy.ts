let currentArticleId = "";

describe("articles", () => {
  beforeEach(() => {
    cy.login("admin", "123").then(() => {
      cy.visit("articles");
    });

    cy.createArticle().then((res) => {
      currentArticleId = res.id;
      cy.visit(`articles/${currentArticleId}`);
    });

    cy.createComment();
  });

  afterEach(() => {
    cy.deleteArticle(currentArticleId);
  });

  it("show info", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
  });

  it("show recommendation list", () => {
    cy.getByTestId("ArticleRecommendationList").should("exist");
  });

  it("show comments", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.getByTestId("CommentCard").should("exist");
  });

  it("rate article", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRating(4, "test feedback");
    cy.get("[data-selected=true").should("have.length", 4);
  });
});
