describe('Alerts', () => {
    it('handles Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', (message) => {
            expect(message).to.equal('I am a JS Alert') 
            return true;
        
        })
        cy.get('button[onclick="jsAlert()"]').click() 
        cy.wait(500)
        cy.get('#result').should('have.text', 'You successfully clicked an alert') 
    
    })
}) 

 


// describe('Alerts', () => {
//     beforeEach(() => {
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     })

//     it('handles Alert', () => {
//         cy.on('window:confirm', (message) => {
//             expect(message).to.equal('I am a JS Confirm') 
//             return true;
//         }) 
//         cy.get('button[onclick="jsConfirm()"]').click() 
//         cy.get('#result').should('have.text', 'You clicked: Ok')
//     })

    
// }) 



// describe('Confirm', () => {
//     beforeEach(() => {
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     })

//     it('handles Confirm', () => {
//         cy.on('window:confirm', (message) => {
//             expect(message).to.equal('I am a JS Confirm') 
//             return false;
//         }) 
//         cy.get('button[onclick="jsConfirm()"]').click() 
//         cy.get('#result').should('have.text', 'You clicked: Cancel')
//     })

    
// }) 




// describe('Prompt', () => {
//     beforeEach(() => {
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     })

//     it('handles Prompt', () => {
//         cy.on('window:prompt', (message) => {
//             expect(message).to.equal('I am a JS prompt') 
//             return true;
//         }) 
//         cy.get('button[onclick="jsPrompt()"]').click() 
//         cy.get('#result').should('have.value', 'You clicked: value')
//     })

    
// }) 




