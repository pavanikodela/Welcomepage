Cypress.on('uncaught:exception', () => false)

describe('flight booking', () => {
    it('Navigate to flight booking page', () => {
        cy.visit('https://qaflightbooking.ccbp.tech/') 

        cy.get('#departureCity').type('New York'); 
        cy.get('#destinationCity').type('Los Angeles') 
        cy.get('#travelDate').type('2023-08-01') 
        cy.get('#passengers').type('2') 
        cy.wait(5000) 
        cy.get('#searchBtn').click()  

        cy.get('[type="radio"]').eq(0).check() 
        cy.wait(5000)  
        cy.contains('Book Now').click() 
        cy.get('p').then((text) => {
             cy.log(text.text()) 
        })
        cy.get('input[type="password"]').type('traveler123') 
        cy.contains('Pay Now').click() 
        cy.wait(5000) 
        cy.get('h2').then((text) => {
            cy.log(text.text())
        })


    })
})