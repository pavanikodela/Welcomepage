describe('Web Driver', () => {
   it('Login page', () => {
    cy.visit('https://qaloginpage.ccbp.tech/')

    cy.get('#username').type('rahul')
    cy.log('Username entered') 

    cy.get('#password').type('rahul@123') 
    cy.log('Password entered') 

    cy.get('.login-button').submit() 
    cy.log('Login button clicked') 

    cy.wait(1000) 
    cy.url().should('include', '/home') 
    cy.log('Logged in Successfully') 

    cy.title().then((msg) => {
        cy.log('Page Title: '+ msg)
    })

    })
}) 
