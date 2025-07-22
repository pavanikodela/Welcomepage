

describe('Ebank Login pages', () => {

  beforeEach(() => {
    cy.LoginPage();
  });

  it('Test login with empty fields', () => {
    cy.get('.login-button').click();
    cy.verifyError('Invalid user ID'); 
  });

  it('Test login with empty User ID', () => {
    cy.LoginCredentials(null, '231225');
    cy.verifyError('Invalid user ID'); 
  });

  it('Test login with empty PIN', () => {
    cy.LoginCredentials('142420', null);
    cy.verifyError('Invalid PIN'); 
  });

  it('Test login with invalid PIN', () => {
    cy.LoginCredentials('142420', '123456');
    cy.verifyError("User ID and PIN didn't match");
  });

  it('Test login with valid credentials', () => {
    cy.LoginCredentials('142420', '231225');
    cy.url().should('eq', 'https://qaebank.ccbp.tech/');
  });

  it('Test logout functionality', () => {
    cy.LoginCredentials('142420', '231225');
    cy.url().should('eq', 'https://qaebank.ccbp.tech/');
    cy.logout();
    cy.url().should('include', '/ebank/login'); 
  });

});
