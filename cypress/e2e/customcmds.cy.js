//  describe('saucedemo', () => {
//     it('Navigate to login page', () => {
//           cy.SauceLoginPage('standard_user', 'secret_sauce') 
//           // cy.url().should('include', '/Products')
//     })
// })




// describe('Internet', () => {
//     it('Navigate to login page', () => {
//         cy.InternetLoginPage('tomsmith', 'SuperSecretPassword!')
//         cy.url().should('include', '/secure')
       
//     })
// })



// describe('Contact', () => {
//     it('Navigate to login page', () => {
       
//         cy.ContactLoginPage('problem', 'user', 'problemuser@gmail.com', 'Hello')
//         cy.url().should('include', '/contact-form-thank-you.html')
//     })
// })




// describe('PracticeTest', () => {
//     it('Navigate to login page', () => {
       
//         cy.PraticeTestLoginPage('student', 'Password123')
//         cy.url().should('include', '/logged-in-successfully/')
//     })
// })



describe('Parabank', ()=> {
  it('Navigate to login Page', () => {
    cy.ParaBankLoginPage('john', 'demo')
    cy.url().should('include', '/overview.htm')
  })
})  

