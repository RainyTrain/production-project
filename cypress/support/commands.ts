import { getByTestId, login } from "./commands/common";
import { resetProfile, updateProfile } from "./commands/profile";

Cypress.Commands.add("login", login);
Cypress.Commands.add("getByTestId", getByTestId);
Cypress.Commands.add("resetProfile", resetProfile);
Cypress.Commands.add("updateProfile", updateProfile);
