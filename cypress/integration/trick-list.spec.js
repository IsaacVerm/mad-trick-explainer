import {
  assertUrl,
  assertColumnNamesTable,
  assertMagicianInTable,
  assertTrickInTable,
  showExplanation,
  assertExplanationText,
  setAlertStub,
  assertTricksHaveWikipediaLinks,
  selectTrick,
  assertOtherSiteText,
  typeTrickNameInput,
  submitTrickName,
  assertTrickNotInTable,
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
      // only checking the first trick
      const indexTrick = 0

      const stub = setAlertStub();

      cy.visit("/trick-list");

      // its() doesn't work here because it looks for a property
      // https://docs.cypress.io/api/commands/its.html
      // properties = DOM, attributes = HTML, big difference!
      assertTricksHaveWikipediaLinks()
      selectTrick(indexTrick).then(() => {
        assertOtherSiteText(stub);
      });
    })
    it('adds trick', () => {
      const trickName = 'I am new here'

      cy.visit("/trick-list");

      typeTrickNameInput(trickName);

      submitTrickName();

      assertTrickInTable(trickName);

      cy.reload()

      assertTrickNotInTable(trickName);
    })
})