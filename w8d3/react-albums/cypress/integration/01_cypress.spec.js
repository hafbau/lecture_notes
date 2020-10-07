describe('Cypress', () => {

  it('Should work', () => {
    expect(true).to.equal(true)
  })

  it('should go to homepage', () => {
    
    cy.visit('http://localhost:8002')
  })


})