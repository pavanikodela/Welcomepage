describe('Concert Page', () => { 
     beforeEach(() => {
            cy.visit('https://qaconcertreg.ccbp.tech/') 
       })
        
        it('Navigate to Concert Page', () => { 

        cy.on('window:alert', ()=> {  
            return true;
        })   
        cy.get('#name').type('Charlie') 
        cy.get('.btn').click() 
        cy.get('window:alert()', () => {
           
        })
    })
})
