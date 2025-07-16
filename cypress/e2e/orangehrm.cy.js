describe('OrangeHRM', () => {
    it('Navigate to Login Page', () =>{
        cy.login('Admin', 'admin123') 
        cy.url().should('include', '/dashboard') 

    }) 
    
})

