describe('API Test', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can display data from an API call', () => {
    // set up a fake web server
    cy.server();

    // load the fixture into memory
    cy.fixture('itunes.json')
      .as('itunesData');

    // fake the endpoint request
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 100,
      response: '@itunesData'
    }).as('getSearch');

    // type into the input field
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // grab the spinner and check for visibility
    cy.get('.spinner')
      .should('be.visible');

    // check to see if the data has displayed correctly
    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    // grab the spinner and check for no visibility
    cy.get('.spinner')
      .should('not.be.visible');

    // untick the explicit box
    cy.contains('Explicit')
      .click();

    // make sure the explicit album is hidden
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});