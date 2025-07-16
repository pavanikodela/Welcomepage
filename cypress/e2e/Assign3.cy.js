describe('Driver Interface', () => {
    it('login to ebank', () => {
        cy.visit(' https://qaebank.ccbp.tech/ebank/login') 
        cy.get('#userIdInput').type('142420') 
        cy.log('Username entered') 
        cy.get('#pinInput').type('231225') 
        cy.log('Password entered') 
        cy.get('.login-button').click() 
        cy.log('Submitted login details') 
        cy.wait(1000)
        cy.url().should('include', 'https://qaebank.ccbp.tech/') 
        cy.log('Logged in successfully') 
        cy.title().then((pageTitle)=>{
            cy.log(pageTitle)
        })
        cy.get('.logout-button').click()
        cy.wait(1000) 
        cy.url().should('include', 'https://qaebank.ccbp.tech/ebank/login')
        cy.log('Logged Out Successfully')
        
    })
}) 

