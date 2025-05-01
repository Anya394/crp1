describe('AddTask', () => {
  it('Добавление задачи', () => {
    cy.visit('http://localhost:5173');

    cy.get('.add-todo')
      .type(`Купить молоко`)
      
    cy.get('[data-testid="add-button"]').click()
  
    cy.get('.todo-item')
      .last()
      .find('.todo-text')
      .should('have.text', 'Купить молоко')
  })
})