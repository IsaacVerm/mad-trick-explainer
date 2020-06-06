import {
  assertUrl,
  assertColumnNamesTable,
  assertMagicianInTable,
  assertTrickInTable,
  showExplanation,
  assertExplanationText,
  setAlertStub
} from "../support/helpers/components/trick-list";

describe('trick-list', () => {
    it('shows tricks', () => {
        // test parameters
        const magician = 'Jean Chassanion';
        const trick = 'Bullet catch'

        cy.visit('/trick-list');

        assertUrl()
        assertColumnNamesTable()
        // if one of the magicians is displayed, it probably works for all of them
        assertMagicianInTable(magician);
        // same goes for the tricks
        assertTrickInTable(trick)
    })
    it('shows explanation when asked for', () => {
      const stub = setAlertStub();

      cy.visit("/trick-list");

      showExplanation().then(() => {
        assertExplanationText(stub)
      });
    })

    it('opens link if you select trick name', () => {
      cy.visit("/trick-list");

      // its() doesn't work here because it looks for a property
      // https://docs.cypress.io/api/commands/its.html
      // properties = DOM, attributes = HTML, big difference!
      cy.get('[data-cy="trick-list_trick_link"]')
        .invoke('attr', 'href')
        .should("contain", "https://en.wikipedia.org/wiki");
    })
})