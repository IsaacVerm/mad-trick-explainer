export function assertUrl(magicianId) {
  cy.url().should("contain", `magicians/${magicianId}`);
}

export function assertTitle(magician) {
  cy.get('h1').should('contain', magician)
}