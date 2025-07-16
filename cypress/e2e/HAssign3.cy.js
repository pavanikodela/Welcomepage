// describe('Secret Content Access Tests', () => {
//   beforeEach(() => {
//     cy.visit('https://qascrtcontent.ccbp.tech/');
//   });

//   it('Success Case: Show Secret Content', () => {
//     cy.on('window:prompt', () => 'password');
//     cy.get('button[onclick="viewSecretContent()"]').click();

//     cy.get('#content', { timeout: 10000 })
//       .should('exist')
//       .and('be.visible')
//       .then(($el) => {
//         cy.log('Secret Content: ' + $el.text());
//       });
//   });
// });
