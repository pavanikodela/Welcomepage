describe('E-Bank Login Automation', () => {
  it('Login with User ID and PIN', () => {
    cy.visit('https://qaebank.ccbp.tech/ebank/login');

    cy.get('input[type="text"]').type(142420);
    cy.log('Username entered');

    cy.get('input[type="password"]').type(231225);
    cy.log('Password entered');

    cy.get('.login-button').click();
    cy.log('Submitted login details');
  });
});
