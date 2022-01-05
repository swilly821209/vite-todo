///<reference types="Cypress" />

describe('測試新增代辦事項功能', () => {
  it('訪問測試網址', () => {
    cy.visit('/')
  })
  it('should be find input element', () => {
    cy.get('#input').clear()
    cy.fixture('example').then((item) => {
      cy.get('#input').type(`${item.todo}{enter}`, {delay: 500})
    })
  })
  it('should have 代辦事項 item', () => {
    cy.get('input[type="text"]').last().should('have.value', '代辦事項')
  })
})
