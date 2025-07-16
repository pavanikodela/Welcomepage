describe('checking', () => {
    it('checked unchcked', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes') 
      

       cy.get('input[type="checkbox"]').first().check() 
       cy.get('input[type="checkbox"]').eq(1).uncheck()
        

       // for radio
        //  cy.get('input[type="checkbox"], [value="male"]').first().check() 
    


    })
})
