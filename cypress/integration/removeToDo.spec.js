describe('測試刪除功能', () => {
  it('找到刪除按鈕並點擊', () => {
    // cy.checkUrl()
    cy.get('.bg-orange-50').last().contains('Delete').click()
  })
  it('確認刪除成功', () => {
    cy.get('input[type="text"]').last().should(($input) => {
      const val = $input.val()
      expect(val).to.include('JavaScript')
      // cy.viewport(325, 500)
    })
  })
})