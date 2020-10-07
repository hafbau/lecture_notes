describe('Filters Test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('unchecks Explicit ', () => {

    cy.get('.filters__form')
    .find('.filters__form-group')
    .first()
    .find('input')
    .uncheck()
    .should('not.be.checked')

  })


  it('toggles 1900s ', () => {

    cy.get('.filters__form')
    .contains('1900s')
    .click()

    cy.get('#1900s')
    .should('not.be.checked')

  })
})