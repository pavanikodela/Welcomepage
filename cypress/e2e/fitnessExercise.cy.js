describe('Fitness Exercise Library', () => {
     it ('Navigate to fitness exercise library', () => {
            cy.visit('https://qafitnesslib.ccbp.tech/') 
            cy.wait(5000)  
            cy.get('#name')

     })
})