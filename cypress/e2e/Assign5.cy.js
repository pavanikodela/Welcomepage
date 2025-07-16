describe('Web Page', () => {
    it('LOgin Page', () => {
        cy.visit('https://qaotploginpage.ccbp.tech') 
        
        cy.get('#email').type('example@gmail.com')  
        cy.log('Email address entered')

        cy.get('.send-otp-btn').click() 

        cy.title().should('exist', 'OTP Verification').then((title)=>{

              cy.log('OTP sent successfully') 
              cy.log(title)
        })
      
        cy.get('#otp').type('123456')  
        cy.log('OTP entered')

        cy.get('#verifyOtpBtn').click()
        cy.wait(1000)


        cy.url().should('include', 'https://qaotploginpage.ccbp.tech/home').then((url)=>{
            cy.title().then((pageTitle)=> {
                cy.log('Logged in successfully')
                cy.log('Page Title:', pageTitle)
            })

        })
        
    })
})



