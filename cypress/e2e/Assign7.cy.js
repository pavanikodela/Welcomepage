describe('Nabar Section', () => {
   it ('Navigate to Navbar Section', () => {
     cy.visit('https://qacompany.ccbp.tech/') 

     cy.get('a[href]="/home"').click()

    //  cy.contains('a', 'About Us').click() 
     
    //  cy.contains('a', 'Contact Us').click()

   })

    
})