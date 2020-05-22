export function assertUrl() {
  cy.url().should("contain", "magician-list");
}

export function assertMagicianInList(magician) {
    cy.get("a").should("contain", magician);
}

export function openMagicianDetails(magicianId) {
    cy.get(`a[href="/magicians/${magicianId}"]`).click();
}