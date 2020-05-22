export function assertUrl(magicianId) {
  cy.url().should("contain", `magicians/${magicianId}`);
}
