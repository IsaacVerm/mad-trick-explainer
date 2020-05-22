export function openTrickList() {
    cy.get('a[href="/trick-list"]').click();
} 

export function openMagicianList() {
    cy.get('a[href="/magician-list"]').click();
}