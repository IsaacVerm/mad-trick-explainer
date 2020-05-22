describe('magician-list', () => {
    it('has table with magicians and their tricks', () => {
        // at the moment the only way to get there is by navigating from the homepage
        cy.visit('http://localhost:4200/');

        cy.get('a[href="/magician-list"]').click();

        cy.url().should('contain', 'magician-list')

        cy.get('tr[mat-header-row]').should('contain', 'Name').should('contain', 'Trick')

        // if one of the magicians is displayed, it probably works for all of them
        cy.get('td').should('contain', 'Harry Houdini')

        // same goes for the tricks
        cy.get('td').should('contain', 'Aztec Tomb')
    })
})