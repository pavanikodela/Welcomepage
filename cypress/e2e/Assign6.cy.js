describe('Blog List', () => {
  it('Navigate to About Page', () => {
   
    cy.visit('https://qabloglist.ccbp.tech/')

    cy.get('a[href="/home"]').click()
    cy.url().then((url) => {
      if (url === 'https://qabloglist.ccbp.tech/home') {
        cy.log('Navigated to home Page')
      } else {
        cy.log('Navigation to home Page Failed')
      }
    })
    
    cy.get('a[href="/about"]').click()

   
    cy.url().then((url) => {
      if (url === 'https://qabloglist.ccbp.tech/about') {
        cy.log('Navigated to About Page')
      } else {
        cy.log('Navigation to About Page Failed')
      }
    }) 



    cy.get('a[href="/contact"]').click()
    cy.url().then((url) => {
      if (url === 'https://qabloglist.ccbp.tech/contact') {
        cy.log('Navigated to contact Page')
      } else {
        cy.log('Navigation to contact Page Failed')
      }
    })


   
  })
})
