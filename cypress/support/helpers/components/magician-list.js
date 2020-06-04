export function assertUrl() {
  cy.url().should("contain", "magician-list");
}

export function assertMagicianInList(magicianName) {
  cy.get("mat-list-item").should("contain", magicianName);
}

export function openMagicianDetails(index) {
  cy.get("mat-list-item").eq(index).click();
}