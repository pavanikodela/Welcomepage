describe('Password Change Flow Tests', () => {
  beforeEach(() => {
   
    cy.visit('https://qaupasswd.ccbp.tech/');
  });

  it('Submission with empty fields', () => {
    cy.contains('Change Password').click();

    cy.on('window:alert', (str) => {
      cy.log(str);
    });
  });

  it('Submission with only old password', () => {
    cy.get('#oldPassword').type('admin');
    cy.contains('Change Password').click();

    cy.on('window:alert', (str) => {
      cy.log(str);
    });
  });

  it('Re-enter Password Mismatch', () => {
    cy.get('#newPassword').type('admin1234');
    cy.get('#reEnterPassword').type('admin');
    cy.contains('Change Password').click();

    cy.on('window:alert', (str) => {
      cy.log(str);
    });
  });

  it('Dismiss confirmation alert', () => {
    cy.get('#reEnterPassword').clear().type('1234');
    cy.contains('Change Password').click();

    cy.on('window:confirm', (msg) => {
      cy.log( msg);
      return false; 
    });

    cy.on('window:alert', (str) => {
      cy.log(str);
    });
  });

  it('change password', () => {
    cy.get('#oldPassword').clear().type('123');

    cy.contains('Change Password').click();

    cy.on('window:confirm', (msg) => {
      cy.log(msg);
      return true; 
    });

    cy.on('window:alert', (str) => {
      cy.log(str);
    });
  });

});
