describe('Blog posts',() => {
    it('Tests the articles', () => {
        cy.visit('/blogs/test-article')
        cy.contains('h1')
        cy.contains('p')
    })
})