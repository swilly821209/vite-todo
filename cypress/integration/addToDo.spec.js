///<reference types="Cypress" />

describe('測試新增代辦事項功能', () => {
  it('訪問測試網址', () => {
    // cy.visit('/').url().should('eq', 'http://localhost:3000/')
    cy.visit('/')
    // cy.checkUrl()
  })
  it('找到輸入代辦事項的輸入框', () => {
    cy.get('#textInput').as('typeToDoInput')
    cy.get('@typeToDoInput').clear()
    cy.fixture('example').then((item) => {
      cy.get('@typeToDoInput').type(`${item.todo}{enter}`, {delay: 100})
    })
  })
  it('確認代辦事項是否有輸入進去', () => {
    cy.get('input[type="text"]').last().should('have.value', '代辦事項')
  })
})
