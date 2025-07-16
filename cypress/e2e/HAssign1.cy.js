describe('Student Enrollment Form Test', () => {
  it('Should handle alerts and input fields correctly', () => {
   
    cy.visit('https://qastdenroll.ccbp.tech/');
    cy.get('input[placeholder="Enter your name"]').type('John');
    cy.contains('Enroll').click();
    cy.on('window:alert', (str) => {
      cy.log(str) 
    });
    cy.get('input[placeholder="Enter your email"]').type('john@gmail.com');
    cy.contains('Enroll').click();
    cy.on('window:alert', (str) => {
      cy.log(str); 
    });
  });
});
