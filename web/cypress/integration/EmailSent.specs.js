/// <reference types="cypress" />

describe('EmailSent', () => {
  it('displays two EmailSent items by default in english', () => {
    cy.visit('http://localhost:8000/en/email-sent')
    cy.get('img').should('exist')
    cy.get('p.h6').first().should('have.text', 'An email is on the way')
    cy.get('p.pt-1').last().should('have.text', 'Click the link in your email to reset your password')
  })

  it('displays ForgotPassword textkeys by default in german', () => {
    cy.visit('http://localhost:8000/de/email-sent')
    cy.get('img').should('exist')
    cy.get('p.h6').first().should('have.text', 'Eine E-Mail ist unterwegs')
    cy.get('p.pt-1').last().should('have.text', 'Kliken sie auf den Link in deiner E-Mail, um dein Password zurrückzusetzen')
  })
})
