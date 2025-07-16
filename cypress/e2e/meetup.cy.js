describe('Meetup Navigation and Form Test', () => {
  it('Register Flow and URL Verification', () => {
    const registerUrl = 'https://qameetup.ccbp.tech/register';
    const homeUrl = 'https://qameetup.ccbp.tech/';
    const notFoundUrl = 'https://qameetup.ccbp.tech/not-found';

    cy.visit('https://qameetup.ccbp.tech/');

    cy.get('#registerButton').click();

    cy.url().then((currentUrl) => {
      if (currentUrl === registerUrl) {
        cy.log('Navigated to Register page');
      }
    });

    cy.get('input[name="name"]').type('John Doe');

    cy.get('#topic').select('Games');

    cy.get('button').contains('Register Now').click();

    cy.url().then((currentUrl) => {
      if (currentUrl === homeUrl) {
        cy.log('Navigated to Home page');
      }
    });

    cy.visit('https://qameetup.ccbp.tech/random-text');

    cy.url().then((currentUrl) => {
      if (currentUrl === notFoundUrl) {
        cy.log('Navigated to Not Found page');
      }
    });
  });
});
