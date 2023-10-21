import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  id: "20",
  title: "Javascript news СВЕЖАЯ",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.04.2022",
  userId: "1",
  type: ["IT"],
  block: [],
};

export const createArticle = () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000/articles",
    body: {
      id: "20",
      title: "Javascript news СВЕЖАЯ",
      subtitle: "Что нового в JS за 2022 год?",
      img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
      views: 1022,
      createdAt: "26.04.2022",
      userId: "1",
      type: ["IT"],
      block: [],
    },
    headers: { Authorization: "test" },
  }).then((res) => res.body);
};

export const deleteArticle = (articleId: string) => {
  cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "test" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(): Chainable<Article>;
      deleteArticle(articleId: string): Chainable<void>;
    }
  }
}
