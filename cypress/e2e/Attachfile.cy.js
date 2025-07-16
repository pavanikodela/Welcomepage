import 'cypress-file-upload'

describe('File Upload Test', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('handles Alert', () => {
        cy.get('#file-upload').attachFile('example.json')  
        cy.get('#file-submit').click() 
        cy.contains('File uploaded!').should('be.visible')
        
    })

    
})
