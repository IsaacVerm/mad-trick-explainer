import { openMagicianList } from '../support/helpers/components/app'
import {
  assertUrl,
  assertColumnNamesTable,
  assertMagicianInTable,
  assertTrickInTable,
} from "../support/helpers/components/magician-list";

describe('magician-list', () => {
    it('has table with magicians and their tricks', () => {
        // test parameters
        const magician = 'Harry Houdini';
        const trick = 'Aztec Tomb'

        // at the moment the only way to get there is by navigating from the homepage
        cy.visit('http://localhost:4200/');

        openMagicianList()

        assertUrl()

        assertColumnNamesTable()

        // if one of the magicians is displayed, it probably works for all of them
        // same goes for the tricks
        assertMagicianInTable(magician);
        assertTrickInTable(trick)
    })
})