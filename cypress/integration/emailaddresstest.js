describe('Edmond C. Dela Cruz QA Engineer Test', () => {
  it('Invalid email address is rejected.', () => {
    cy.visit('https://signup.velpic.com')
    cy.url()
      .should('include','signup.velpic.com')
    cy.contains('Start your free trial today.')
    cy.contains('Try all of Velpic’s features for free - no credit card required.')
    cy.get('form').within(() => {
      cy.get('input')
        .type('invalidemail123@invemail')
        .should('have.value', 'invalidemail123@invemail')
      cy.get('button').click()
    })
    cy.contains('Please check that your email address is entered correctly')
    cy.contains('Great, now we need a few more details to set you up.')
      .should('not.exist')
  })

  it('Valid email address is accepted.', () => {
    cy.visit('https://signup.velpic.com')
    cy.get('form').within(() => {
      cy.get('input')
        .type('validemail123@email.com')
      cy.get('button').click()
    })
    cy.contains('Great, now we need a few more details to set you up.')
    cy.contains('Enter your work email')
      .should('not.exist')
    cy.contains('Please check that your email address is entered correctly')
      .should('not.exist')
  })
})
