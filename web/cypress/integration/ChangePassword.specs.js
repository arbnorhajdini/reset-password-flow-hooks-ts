/// <reference types="cypress" />

describe('ChangePassword', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/en/change-password')
  })

  it('displays ChangePassword textkeys by default in english', () => {
    cy.get('p.h6').first().should('have.text', 'Forgot your password ?')
    cy.get('p.pt-5').last().should('have.text', 'No problen, it happens! Choose a new one below')
    cy.get('input#password').invoke('attr', 'placeholder').should('contain', 'New password')
    cy.get('input#confirm-password').invoke('attr', 'placeholder').should('contain', 'Confirm new password')
  })

  it('submit button of ChangePassword', () => {
    cy.get('input#password').type('1234')
    cy.get('input#confirm-password').type('1234')
    cy.get('button').click()
    cy.url().should('include', 'http://localhost:8000/en/success-changed')
  })

  describe('ChangePassword in German', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/de/change-password')
    })
    it('displays ChangePassword textkeys by default in german', () => {
      cy.get('p.h6').first().should('have.text', 'Du hast dein Password vergessen ?')
      cy.get('p.pt-5').last().should('have.text', 'Kein Problem, dass kann passieren! Vergib untern einfach ein neues Password')
      cy.get('input#password').invoke('attr', 'placeholder').should('contain', 'Neues Password')
      cy.get('input#confirm-password').invoke('attr', 'placeholder').should('contain', 'Neues Password wiederholen')
    })
  })
})