Cypress.on('uncaught:exception', () => false) 

describe('Workshop Enrollment', () => {
    it('Navigate to login page', () => {
        cy.visit('https://qaworkshopenrl.ccbp.tech/')  
        cy.wait(5000)  
        cy.get('#name', {timeout: 5000}).type('George') 
        cy.get('#continueName').click()  

        cy.get('#email', {timeout: 5000}).type('george@gmail.com')  
        cy.get('#continueEmail').click() 

        cy.get('#react').check() 
        cy.get('#slot').select('11AMto12PM') 
      

        cy.get('#submit').click() 

        cy.get('#successMessage', {timeout: 5000})
        .then((msg) => {
        cy.log('Success Message:', msg.text());
      
      });


 


    })
})