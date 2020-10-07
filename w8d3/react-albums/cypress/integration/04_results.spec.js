describe('Filters Test', () => {

  beforeEach(() => {
    cy.visit('/')

    cy.get('.search__form')
    .find('input')
    .as('inputField')
  })

  it('display results', () => {
    // set up fake server
    cy.server()

    // load up our fixtures
    cy.fixture('itunes.json')
    .as('itunesData')

    // fake endpoint / route to be called
    // app.get('/search', () =)
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 100,
      response: '@itunesData'
    }).as('getSearch')

    // type some search term
    cy.get('@inputField')
    .type('Daft punk')
    .should('have.value', 'Daft punk')

    // grab the spinner, see if visible
    cy.get('.spinner')
    .should('be.visible')




    // check that i receive the right result
    cy.wait('@getSearch')
    .get('main')
    .contains('Homework')
    .should('be.visible')
    .as('searchDone');


    // grab spinner again, see that it's not visible
    cy.get('@searchDone')
    .closest('main')
    // .find('[data-cy="spinner"]') // no such selector in code yet, but it's the recommended way by cypress
    .find('.spinner')
    .should('not.be.visible')
    .as("spinnedTriggerd")

    // confirm explicit is there
    cy.contains('Explicit')
    .click()

    // uncheck explicit to confirm it goes away
    cy.get('article.album')
    .should('not.contain', 'Daft Club')
  })
})