
Cypress.on('uncaught:exception', () => false) 

describe('Car List Test', () => {
  it('Verifies car names', () => {
    cy.visit('https://qacarslist.ccbp.tech/');

   cy.get('#sedans').then(items => {
      let found = false;                
      for (let i = 0; i < items.length; i++) {
        let name = items[i].innerText;
        if (name.startsWith("Toyota") && name.includes("Cam")) {
          if (name === "Toyota Camry") {
            found = true; 
            break;
          }
        }
      }
      if (!found) {
        cy.log("Car Name not Matched");
        return;
      };
     
    })
        

})
})

