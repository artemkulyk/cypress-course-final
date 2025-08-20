describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('todo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://microsoftedge.github.io/Demos/demo-to-do/');
    cy.get('#new-task').clear('f');
    cy.get('#new-task').type('first task{enter}');
    cy.get('[type="submit"]').click();
    cy.get('#new-task').clear();
    cy.get('#new-task').type('second task{enter}');
    cy.get('[type="submit"]').click();
    cy.get('#new-task').clear();
    cy.get('#new-task').type('third task{enter}');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(4) > label > .box').check();
    cy.get(':nth-child(3) > label > .box').check();
    cy.get(':nth-child(4) > .delete').click();
    /* ==== End Cypress Studio ==== */

    cy.get('.new-task-form > label').contains('task');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('new_test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://microsoftedge.github.io/Demos/demo-to-do/');
    cy.get('#new-task').clear('t');
    cy.get('#new-task').type('task{enter}');
    cy.get('[type="submit"]').click();
    cy.get('#new-task').clear('a');
    cy.get('#new-task').type('another{enter}');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(2) > label > .box').check();
    /* ==== End Cypress Studio ==== */

    cy.get('.new-task-form > label').should('have.text', '➕ Add task');
  });
})