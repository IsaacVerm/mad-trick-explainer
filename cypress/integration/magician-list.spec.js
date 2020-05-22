import { openMagicianList } from '../support/helpers/components/app'
import { assertMagicianInList,
         assertUrl as assertUrlList,
         openMagicianDetails } from '../support/helpers/components/magician-list'
import { assertUrl as assertUrlDetails } from '../support/helpers/components/magician-details'

describe('magician-list', () => {
    it('lists magicians', () => {
        // test parameters
        const magician = 'Harry Houdini';
        const magicianId = 0

        cy.visit('')

        openMagicianList()
        assertUrlList();
        assertMagicianInList(magician);
        
        // no extra assertions, just checking if you can navigate
        openMagicianDetails(magicianId)
        assertUrlDetails(magicianId);
    })
})