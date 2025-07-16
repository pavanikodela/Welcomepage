Cypress.on('uncaught:exception', () => false) 


describe('Patients List Validation', () => {
  it('Navigate to Patients List', () => {
    cy.visit('https://qapatientslist.ccbp.tech/');

    // AND Condition: Name that starts with "J" and contains "Smith"
    cy.get('#outpatients li').then((list) => {
      const names = list.map((index, element) => element.innerText).get();
      const matchedName = names.find(name => name.startsWith('J') && name.includes('Smith'));

      if (matchedName !== 'Jane Smith') {
        cy.log('Patient Name not Matched');
      }
    });                       

    // OR Condition: Third patient in either outpatients or inpatients list
    let outPatientName;
    let inPatientName;

    cy.get('#outpatients li').then((list) => {
       outPatientName = list.eq(2).text(); // index 2 = third patient
    });

    cy.get('#inpatients li').then((list) => {
       inPatientName = list.eq(2).text();

      if (outPatientName === 'Michael Johnson' || inPatientName === 'Ash Campbell') {
        cy.log('OR Condition Passed');
      } else {
        cy.log('Third Patient Names in the List Not Matched');
      }
    });

    // NOT Condition: Patients not in Emergency list
    const expectedNonEmergency = [
      "John Doe", "Jane Smith", "Michael Johnson", "Richardson",
      "David Smith", "Alvan Peterson", "William Clark", "Ash Campbell",
      "Alexander Davis", "Asher Wood"
    ];

    let allPatientNames;
    let emergencyPatientNames;

    cy.get('.patient-list li').then((list) => {
      allPatientNames = list.map((index, element) => element.innerText).get();
    });

    cy.get('#emergency li').then((list) => {
      emergencyPatientNames = list.map((index, element) => element.innerText).get();

      const nonEmergency = allPatientNames.filter(name => !emergencyPatientNames.includes(name)); 
      cy.log(nonEmergency)

      const allMatched = JSON.stringify(nonEmergency.sort()) === JSON.stringify(expectedNonEmergency.sort());

      if (!allMatched) {
        cy.log('Non Emergency Patient Names not Matched');
      } else {
        cy.log('NOT Condition Passed');
      }

      // Final overall validation
      if (
        (outPatientName === 'Michael Johnson' || inPatientName === 'Ash Campbell') &&
        allMatched
      ) {
        cy.log('All Patient Names Matched');
      }
    });
  });
});



