export function assertUrl() {
    cy.url().should("contain", "magician-list");
}

export function assertColumnNamesTable() {
    cy.get("tr[mat-header-row]")
      .should("contain", "Name")
      .should("contain", "Trick");
}

export function assertMagicianInTable(magician) {
    cy.get("td").should("contain", magician);
}

export function assertTrickInTable(trick) {
    cy.get("td").should("contain", trick);
} 