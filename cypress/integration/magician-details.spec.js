import { assertUrl, assertTitle } from "../support/helpers/components/magician-details";

describe('magician-details', () => {
    it('shows the magician name', () => {
        const magician = "Harry Houdini";
        const magicianId = 0;

        cy.visit(`/magicians/${magicianId}`)
        assertUrl(magicianId)
        assertTitle(magician)
    })
})