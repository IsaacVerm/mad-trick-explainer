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
}

export function assertMagicianInTable(magician) {
    cy.get('[data-cy="trick-list_table"]').should("contain", magician);
}

export function assertTrickInTable(trick) {
    cy.get('[data-cy="trick-list_table"]').should("contain", trick);
} 

export function setAlertStub() {
    // when the alert is displayed
    // we check if it's called with the right text
    // https://docs.cypress.io/api/events/catalog-of-events.html#Assert-on-the-alert-text
    const stub = cy.stub();
    cy.on('window:alert', stub)
    return stub
}

export function showExplanation() {
    return cy.get('[data-cy="trick-list_explanation_button"]').click();
}

export function assertExplanationText(stub) {
    // overview of sinon stub assertions
    // https://www.chaijs.com/plugins/sinon-chai/
    // we don't want to match the entire alert text, only the principal part
    // https://docs.cypress.io/api/utilities/sinon.html#Syntax
    expect(stub).to.be.calledWith(Cypress.sinon.match("This table shows"));
}