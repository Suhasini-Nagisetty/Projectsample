import loginElements from '../objects/login.obj'
import headerElements from '../objects/header.obj'

Cypress.Commands.add("loginUI", (email, password) => {
    cy.visit('/login')
    cy.get(loginElements.emailField).type('test@suhasini123.com')
    cy.get(loginElements.passwordField).type('abc123456')
    cy.get(loginElements.submitButton).click()
    cy.get(loginElements.loggedinUserName).should('be.visible')
})
