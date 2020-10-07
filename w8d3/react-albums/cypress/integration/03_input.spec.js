describe('Filters Test', () => {

  beforeEach(() => {
    cy.visit('/')

    cy.get('.search__form')
    .find('input')
    .as('inputField')
  })

  it('can type in the search form', () => {
    const searchTerm = 'Celine dion'
    cy.get('@inputField')
    .type(searchTerm, { delay: 150 })
    .should('have.value', searchTerm)
  })

  it('can correct typing errors in the search form', () => {
    const searchTerm = 'Celine dion'
    cy.get('@inputField')
    .type('Celine ddd{backspace}{backspace}ion', { delay: 150 })
    .should('have.value', searchTerm)
  })
})