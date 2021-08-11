/// <reference types="cypress" />

describe('SuccessChanged', () => {
  it('displays two SuccessChanged items by default in english', () => {
    cy.visit('http://localhost:8000/en/success-changed')
    cy.get('p.h5').should('have.text', 'Success')
    cy.get('p.pt-3').should('have.text', 'Your password has been changed. We are looking forward to seeing you again soon.')
  })

  it('displays two SuccessChanged items by default in english', () => {
    cy.visit('http://localhost:8000/de/success-changed')
    cy.get('p.h5').should('have.text', 'Password erfolgreich geändert!')
    cy.get('p.pt-3').should('have.text', 'Dein Password wurde geändert. Wir freuen uns auf ein baldiges Wiedersehen.')
  })
})