import loginelements from '../objects/login.obj'

describe('login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })    
    it('with empty email and password click on sigon button', () => {
        cy.get(loginelements.submitButton).click()
        cy.get(loginelements.errroMsg).should('be.visible').should('contain','email or password is invalid')        
    })  
    it('display of Error message for incorrect credentials', () => {
         //cy.loginUI()
         // cy.visit('')  
        cy.get(loginelements.emailField).type('test@suhasini123.com')
        cy.get(loginelements.passwordField).type('abc00000')
        cy.get(loginelements.submitButton).click()
        cy.get(loginelements.errroMsg).should('be.visible').should('contain','email or password is invalid')
    })
    it('with email and password', () => {
        cy.get(loginelements.emailField).type('test@suhasini123.com')
        cy.get(loginelements.passwordField).type('abc123456')
        cy.get(loginelements.submitButton).click()
        cy.get(loginelements.loggedinUserName).should('be.visible')
    })
})
