describe('Cypress', () => {

  it('should work', () => {
    expect(true).to.equal(true)
  })

  it('should visit the homepage', () => {
    cy.visit('http://localhost:8002')

  })
})