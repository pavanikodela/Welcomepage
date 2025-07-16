describe('Meet up Page', () => {
    it('Navigate to login page', () => { 

        const url = 'https://qameetup.ccbp.tech/' 
        const registerUrl = 'https://qameetup.ccbp.tech/register' 
        const notFoundUrl = 'https://qameetup.ccbp.tech/not-found'

        cy.visit('https://qameetup.ccbp.tech/') 

        
        cy.get('#registerButton').click()  

        cy.url().then((currentUrl) => {
            if(currentUrl == registerUrl){
                cy.log('Navigated to Register page')
            }  

        })

        cy.get('input[name="name"]').type('John Doe');

        cy.get('#topic').select('Games');

        cy.get('button').contains('Register Now').click(); 
          
        cy.url().then((currentUrl) => {
        if (currentUrl === url) {
        cy.log('Navgated to Home Page');
        }
       });  

        cy.visit('https://qameetup.ccbp.tech/random-text');

        cy.url().then((currentUrl) => {
        if (currentUrl === notFoundUrl) {
        cy.log('Navigated to Not Found page');
      }
    });

    })
})