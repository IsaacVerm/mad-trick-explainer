export function assertUrl() {
    cy.url().should("contain", "trick-list");
}

export function assertColumnNamesTable() {
    cy.get('[data-cy="trick-list_table"] th')
      .should("contain", "name")
      .and("contain", "inventor")
      .and("contain", "type")
      .and("contain", "description")
      .and("contain", "synonyms")
      .and("contain", "link");
}

export function assertMagicianInTable(magician) {
    cy.get('[data-cy="trick-list_table"]').should("contain", magician);
}

export function assertTrickInTable(trick) {
    cy.get('[data-cy="trick-list_table"]').should("contain", trick);
} 