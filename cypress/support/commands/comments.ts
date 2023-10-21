import { Comment } from "entities/Comment";

export const createComment = () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000/comments",
    headers: { Authorization: "test" },
    body: {
      articleId: "20",
      userId: "1",
      text: "It's a comment for test",
      id: 20,
    },
  }).then((res) => res.body);
};

export const deleteComment = (commentId: string) => {
  cy.request({
    method: "DELETE",
    url: `http://localhost:8000/comments/${commentId}`,
    headers: { Authorization: "test" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createComment(): Chainable<Comment>;
      deleteComment(testId: string): Chainable<void>;
    }
  }
}
