describe('Test home page', () => {
  it('Tests to verify all important functions of home page exist and work', () => {
    cy.visit('/')
    cy.get('h2').contains('Latest articles')
    cy.get('p').contains('Freshly brewed articles from the blog')
    cy.get('article')
  })
})