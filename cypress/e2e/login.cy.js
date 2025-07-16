describe('Driver Interface', () => {
    it('login to ebank', () => {
        cy.visit(' https://qaebank.ccbp.tech/ebank/login') 
        cy.get('#userIdInput').type('142420') 
        cy.log('Username entered') 
        cy.get('#pinInput').type('231225') 
        cy.log('Password entered') 
        cy.get('.login-button').click() 
        cy.log('Submitted login details')
    })
})