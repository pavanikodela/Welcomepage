// Cypress.on('uncaught:exception', () => false)

describe('Snapchat Page Info', () => {
  it('Print Title and URL', () => {
    cy.visit('https://www.snapchat.com');

    cy.title().then((title) => {
      cy.url().then((url) => {
        cy.log(`${title}: ${url}`);
        cy.log('webPageTitle: ' + title + ' | webPageUrl: ' + url);
      });
    });
  });
});
