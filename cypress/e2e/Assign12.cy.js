describe('NXT WATCH', () => {
    it('Navigate to NXT watch Page', () => {
        cy.visit('https://qanxtwatch.ccbp.tech/login') 

        cy.get('#userNameInput').type('rahul') 
        cy.get('#passwordInput').type('rahul@2021') 

        cy.get('#loginButton').click() 
        cy.wait(1000)  
        cy.url().should('include', 'https://qanxtwatch.ccbp.tech/') 
        cy.log('Logged in successfully')
        cy.title().then((msg) => {
            cy.log(msg)
        })

        cy.get('#desktopLogoutButton').click() 
        cy.get('#desktopConfirmButton').click() 
        cy.wait(1000) 
        cy.url().should('include', 'https://qanxtwatch.ccbp.tech/login')
        cy.log('Logged out Successfully')
        cy.title().then((msg) => {
            cy.log(msg)
        })

    })
})

