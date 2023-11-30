import { createArticle, deleteArticle, setRating } from "./commands/articles";
import { createComment, deleteComment } from "./commands/comments";
import { getByTestId, login } from "./commands/common";
import { resetProfile, updateProfile } from "./commands/profile";

Cypress.Commands.add("login", login);
Cypress.Commands.add("getByTestId", getByTestId);
Cypress.Commands.add("resetProfile", resetProfile);
Cypress.Commands.add("updateProfile", updateProfile);
Cypress.Commands.add("createArticle", createArticle);
Cypress.Commands.add("deleteArticle", deleteArticle);
Cypress.Commands.add("createComment", createComment);
Cypress.Commands.add("deleteComment", deleteComment);
Cypress.Commands.add("setRating", setRating);
