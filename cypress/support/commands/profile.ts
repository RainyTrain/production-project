export const updateProfile = () => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.FirstName").clear().type("new");
  cy.getByTestId("ProfileCard.LastName").clear().type("new");
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "test" },
    body: {
      id: "3",
      first: "user2",
      second: "user2",
      age: 22,
      username: "user2",
      avatar:
        "https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-circular-pattern-png-image_4492887.jpg",
      city: "London",
      currency: "USD",
      country: "BELARUS",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
