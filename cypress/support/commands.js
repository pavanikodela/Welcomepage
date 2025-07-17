Cypress.Commands.add('LoginPage', () => {
  cy.visit('https://qaebank.ccbp.tech/ebank/login');
});

Cypress.Commands.add('LoginCredentials', (userId, pin) => {
  if (userId) cy.get('#userIdInput').type(userId);
  if (pin) cy.get('#pinInput').type(pin);
  cy.get('.login-button').click();
});

Cypress.Commands.add('verifyError', (errorMsg) => {
  cy.get('.error-message-text').should((element) => {
    const actualText = element.text().trim().toLowerCase();
    expect(actualText).to.include(errorMsg.toLowerCase()); 
  });
});

Cypress.Commands.add('logout', () => {
  cy.get('button[type="button"]').click(); 
});
