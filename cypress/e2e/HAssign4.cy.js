// Cypress.on('uncaught:exception', () => false)

// describe('Secure Download Flow - Complete Flow', () => {
//   it('End-to-End Flow', () => {
//     cy.visit('https://qasecdwnld.ccbp.tech/');

//     // Enter email and generate OTP
//     cy.get('input[type="email"]').type('@gmail.com');
//     cy.contains('Generate OTP').click();

//     cy.on('window:alert', (msg) => cy.log('Email Alert: ' + msg));

//     // Wait for OTP section to render
//     cy.wait(2000);

//     // Dynamically check for OTP input
//     cy.get('body').then(($body) => {
//       if ($body.find('input').length > 1) {
//         cy.get('input').eq(1).type('123456');
//       } else {
//         cy.log('OTP field not found');
//       }
//     });

//     // Wait for Submit button to appear and click
//     cy.contains('Submit', { timeout: 8000 }).click();

//     let alertCount = 0;
//     cy.on('window:alert', (msg) => {
//       alertCount++;
//       cy.log(`Alert ${alertCount}: ${msg}`);
//     });

//     cy.on('window:prompt', () => 'password123');
//     cy.contains('Download').click();

//     cy.on('window:alert', (msg) => {
//       cy.log('Download Alert: ' + msg);
//     });

//     cy.log('Download Successful');
//   });
// });
