describe('saucedemo', () => {
    it('Navigate to login page', () => {
          cy.visit('https://www.saucedemo.com/')
          cy.get('input[type="text"]').type('standard_user')
          cy.get('input[type="password"]').type('secret_sauce') 
          cy.get('input[type="submit"]').click() 
          cy.url().should('include', '/Products')
    })
})




// describe('OrangeHRM', () => {
//     it('Navigate to Login Page', () => {
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//         cy.get('input[name="username"]').type('Admin')
//         cy.get('input[type="password"]').type('admin123')
//         cy.get('button[type="submit"]').click()
//         cy.url().should('include', '/dashboard') 

//     })
// })


// describe('Internet', () => {
//     it('Navigate to login page', () => {
//         cy.visit('https://the-internet.herokuapp.com/login') 
//         cy.get('input[type="text"]').type('tomsmith')
//         cy.get('input[type="password"]').type('SuperSecretPassword!') 
//         cy.get('button[type="submit"]').click()  
//         cy.url().should('include', '/secure')
//     })
// })


// describe('Contact', () => {
//     it('Navigate to login page', () => {
//         cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html') 
//         cy.get('input[name="first_name"]').type('problem')
//         cy.get('input[name="last_name"]').type('user') 
//         cy.get('input[name="email"]').type('problemuser@gmail.com') 
//         cy.get('textarea[name="message"]').type('Hello') 
//          cy.get('input[type="submit"]').click()
//         cy.url().should('include', '/contact-form-thank-you.html')
//     })
// })


// describe('PracticeTest', () => {
//     it('Navigate to login page', () => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/') 
//         cy.get('input[type="text"]').type('student')
//         cy.get('input[type="password"]').type('Password123') 
//         cy.get('#submit').click()  
//         cy.url().should('include', '/logged-in-successfully/')
//     })
// })
