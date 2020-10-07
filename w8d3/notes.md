# End-to-End Testing with Cypress

Thank you for the class today. Hopefully that was fun for y'all the way it was for me. Thanks for being engaging as well.

Our demo code is here; check in the `cypress/integration` for all the tests we wrote.

Also, on understanding a bit better, how Cypress is able to trigger your cy.gets / contains in parallel and still knows when a test passes; see here:
[Just the `Cypress is Not like jQuery` section](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-is-Not-Like-jQuery)

TL; DR:
- It does respect your order for simple interactions
- For long running process like API calls, it's best to cy.wait on the route
- Because of retries that cypress do, you want to ensure that your order is respected. For example in the case of the `.spinner`
  + a way to do this is to find the spinner based of the last selected element that it depends on.
  See this example from our fourth spec file

  ```js
  // check that i receive the right result
    cy.wait('@getSearch')
    .get('main')
    .contains('Homework')
    .should('be.visible')
    .as('searchDone');


    // grab spinner again, see that it's not visible
    cy.get('@searchDone') // making this block coupled to the previous one
    .closest('main')
    // .find('[data-cy="spinner"]') // no such selector in code yet, but it's the recommended way by cypress
    .find('.spinner')
    .should('not.be.visible')
    .as("spinnedTriggerd")
  ```


## Agenda

- [x] Unit / Integration / End-to-end testing
- [x] Jest vs Cypress
- [x] Cypress
    + Installation
    + Design / Write / Run tests

## Unit / Integration / End-to-end testing

**Unit Testing** - the idea of testing single peice of code in isolation. We were writting tests for components and functions alike, and everything was isolated.

**Integration Testing** - the test in passing information from place to other.

**End to End Testing** - Full on user story testing. We fake a user (with our program tests) to click through an app and track what things happen.

## Jest vs Cypress

Jest
  - Unit / Integration
  - CLI based
  - tests located within src
  - test are assertion based


Cypress
- e2e / integration (mostly)
- Runs a browser for your test
- tests are adjacent to code - not embeddd
- test any website the online