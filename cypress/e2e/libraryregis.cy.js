Cypress.on('uncaught:exception', () => false)

describe('Library Registration Form', () => {
  it('Fill the form and submit', () => {
    cy.visit('https://libraryregtest.ccbp.tech/');

    cy.get('input[name="fullName"]').type('John Doe');

    cy.get('#male').check();

    cy.get('#contactNumber').type('9876543210');

    cy.get('#email').type('johndoe@gmail.com');

    cy.get('select').select('individual');

    cy.get('#fiction').check();

    cy.get('#science').check();

    cy.get('#agreement').check();

    cy.get('input[type="submit"]').click();
  });
});
