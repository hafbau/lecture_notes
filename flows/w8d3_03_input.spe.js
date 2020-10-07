describe('Input Tests', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('inputField');
  });

  it('can type into the input field', () => {
    const searchTerm = 'Carrie Underwood';
    cy.get('@inputField')
      .type(searchTerm, { delay: 150 })
      .should('have.value', searchTerm);
  });

  it('can it handle backspace?', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});