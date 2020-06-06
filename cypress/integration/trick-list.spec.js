import {
  assertUrl,
  assertColumnNamesTable,
  assertMagicianInTable,
  assertTrickInTable,
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
})