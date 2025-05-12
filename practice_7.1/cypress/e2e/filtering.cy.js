describe('Filtering', () => {
    it('Проверка фильтрации', () => {
      cy.visit('http://localhost:5173');

      const tasks = ['Купить молоко', 'Позвонить маме', 'Записаться к врачу']
  
      tasks.forEach(task => {
        cy.get('[data-testid="todo-input"]').type(`${task}{enter}`)
        if (task == 'Позвонить маме')
        {
          cy.contains('.todo-item', 'Позвонить маме')
            .find('.checkbox')
            .click()
        }
      })

      // Проверяем, что все задачи добавились
      cy.get('.todo-item').should('have.length', tasks.length+2)
      tasks.forEach(task => {
        cy.contains('.todo-item', task).should('exist')
      })

      cy.get('[data-testid="filter-active"]').click()
      cy.contains('.todo-item', 'Позвонить маме').should('not.exist')

      cy.get('[data-testid="filter-completed"]').click()
      cy.contains('.todo-item', 'Позвонить маме').should('exist')
    })
  })