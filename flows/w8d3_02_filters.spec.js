describe('Filter tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can toggle the explicit check box', () => {
    cy.get('.filters__form')
      .find('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle 1900s check box', () => {
    cy.contains('1900s')
      .click();

    cy.get('#1900s')
      .should('not.be.checked');
  });

});