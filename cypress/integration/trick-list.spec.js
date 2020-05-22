import { openTrickList } from '../support/helpers/components/app'
import {
  assertUrl,
  assertColumnNamesTable,
  assertMagicianInTable,
  assertTrickInTable,
} from "../support/helpers/components/trick-list";

describe('trick-list', () => {
    it('has table with tricks by magician', () => {
        // test parameters
        const magician = 'Harry Houdini';
        const trick = 'Aztec Tomb'

        // at the moment the only way to get there is by navigating from the homepage
        cy.visit('');

        openTrickList()

        assertUrl()

        assertColumnNamesTable()

        // if one of the magicians is displayed, it probably works for all of them
        // same goes for the tricks
        assertMagicianInTable(magician);
        assertTrickInTable(trick)
    })
})