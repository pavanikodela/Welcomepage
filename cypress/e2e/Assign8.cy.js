describe('TDS', () => {
   it('Travel to Destination Selector', () => {
     cy.visit('https://qatraveldest.ccbp.tech/') 

     cy.get('input[type="radio"]').should('have.text', 'Beach Getaway')
     cy.get('input[type="radio"]').should('have.text', 'Adventure Trek')
     cy.get('input[type="radio"]').should('have.text', 'City Exploration')
     cy.get('input[type="radio"]').should('have.text', 'Cultural Experience')
   })
})