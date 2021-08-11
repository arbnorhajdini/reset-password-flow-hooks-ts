/// <reference types="cypress" />

describe('ForgotPassword', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/en')
  })

  it('displays ForgotPassword textkeys by default in english', () => {
    cy.get('p.h6').first().should('have.text', 'Forgot your password ?')
    cy.get('p.pt-5').last().should('have.text', 'No problem, it happens! Just give us your email address and we will send you a reset link')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'E-mail address')
    cy.get('button').first().should('have.text', 'Send me a reset link')
  })

  it('submit fail to email address', () => {
    cy.get('input').type('wrong-email@gmail.com')
    cy.get('button').click()
    cy.get('.noty_body').first().should('have.text', 'E-mail address not found')
    cy.url().should('include', 'http://localhost:8000/en')
  })

  it('submit email address', () => {
    cy.get('input').type('arbnorhajdini1@gmail.com')
    cy.get('button').click()
    cy.url().should('include', 'http://localhost:8000/en/email-sent')
    cy.get('svg').click()
    cy.url().should('include', 'http://localhost:8000/en')
  })

  describe('ForgotPassword in german', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/de')
    })
    it('displays ForgotPassword textkeys by default in german', () => {
      cy.get('p.h6').first().should('have.text', 'Du hast dein Password vergessen ?')
      cy.get('p.pt-5').last().should('have.text', 'Kein Problem, dass kann passieren! Gib intern einfach deine E-Mail Adresse ein und wir schicken dir einen Link zum Rücksetzen.')
      cy.get('input').invoke('attr', 'placeholder').should('contain', 'E-Mail Adresse')
      cy.get('button').first().should('have.text', 'Schick mir einen Link')
    })
  })
})
