describe('Show/Hide', () => {
    it('Clicking SHOW/HIDE buttons', () => {
        cy.visit('https://qashowhide.ccbp.tech/') 

        cy.get('#firstname').click()
        cy.get('#lastname').click()  

        cy.get('#firstname').click()
        cy.get('#lastname').click()

    })
})