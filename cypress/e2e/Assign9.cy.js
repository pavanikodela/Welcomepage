Cypress.on('uncaught:exception', () => false)

describe('Check Box', () => {
     it('Clicking Check Box', () => {
        cy.visit('https://dietplantest.ccbp.tech/') 

        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').eq(1).check() 
        cy.get('input[type="checkbox"]').eq(2).check()
        cy.get('input[type="checkbox"]').eq(3).check()

     }) 
})