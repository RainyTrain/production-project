import { getByTestId } from "../../support/commands/common";

let profileId = "";

describe("profile-edit", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("user2", "123").then((res) => {
      profileId = res.id;
      cy.visit(`/profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it("profile successfully loaded", () => {
    getByTestId("ProfileCard.FirstName").should("have.value", "user2");
  });

  it("profile successfully updated", () => {
    cy.updateProfile();
    getByTestId("ProfileCard.FirstName").should("have.value", "new");
    getByTestId("ProfileCard.LastName").should("have.value", "new");
  });
});
