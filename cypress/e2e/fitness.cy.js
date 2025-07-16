Cypress.on('uncaught:exception', () => false) 

describe('Fitness App', () => {
    it('Navigate to Fitness', () => {
        cy.visit('https://qafitnesslib.ccbp.tech/') 
        cy.wait(500) 
        cy.get('li[class="category-item"]').click()  
        cy.wait(500) 
        

    })
})