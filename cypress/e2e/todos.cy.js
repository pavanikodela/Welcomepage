describe('To-Do App Automation', () => {
  it('Add and Select Tasks', () => {
    cy.visit('https://qatodos.ccbp.tech/');

    cy.get('.todo-user-input').type('Task 1');
    cy.get('#addTodoButton').click();

    cy.get('.todo-user-input').type('Task 2');
     cy.get('#addTodoButton').click();


    cy.get('.todo-user-input').type('Task 3');
      cy.get('#addTodoButton').click();


    cy.get('#checkbox1').check();
    cy.get('#checkbox3').check();
  });
});
