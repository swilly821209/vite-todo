describe('Test todo list', () => {
  it('Add item', () => {
    cy.visit('/')
    cy.viewport(325, 500)
    cy.wait(3000)
    cy.viewport(1000, 800)
    cy.get('#textInput').clear()
    cy.fixture('example').then(item => {
      cy.get('#textInput').type(`${item.todo}{enter}`, { delay: 500 })
      cy.getItemInput().should('have.value', item.todo)
    })
  })
  it('Edit item', () => {
    cy.get('button')
      .last()
      .click()
    const editedText = '修改後的代辦事項'
    cy.focused()
      .clear()
      .type(editedText)
    cy.getItemInput().should('have.value', editedText)
  })
  it('Delete item', () => {
    cy.get('.btn-delete')
      .last()
      .contains('Delete')
      .click()
    cy.getItemInput().should($input => {
      const val = $input.val()
      expect(val).to.include('JavaScript')
    })
  })
})
