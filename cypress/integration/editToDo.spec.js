describe('測試修改代辦事項功能', () => {
  it('找到代辦事項的修改按鈕並點擊', () => {
    cy.checkUrl()
    cy.get('button').last().click()
  })
  it('找到要修改的代辦事項', () => {
    cy.focused().clear().type('修改後的代辦事項')
  })
  it('確認代辦事項有被修改', () => {
    cy.get('input[type="text"]').last().should('have.value', '修改後的代辦事項')
  })
})