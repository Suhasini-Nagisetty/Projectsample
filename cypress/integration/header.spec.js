import loginElements from '../objects/login.obj'
import headerElements from '../objects/header.obj'
describe('header', () => {
    it('with proper heading for logged out user', () => {
        cy.visit('')
        cy.get(headerElements.homepageConduitLabel).should('be.visible')
            .and('contain', 'conduit').and('have.attr', 'href', '#/')
            .and('have.css', 'color', 'rgb(92,184,92)')
        cy.get(headerElements.homepageHomelink).should('be.visible').and('contain', 'Home')
        cy.get(headerElements.homepageSiginLink).should('be.visible').and('contain', 'Sign in')
        cy.get(headerElements.homepageSignupLink).should('be.visible').and('contain', 'Sign up')
    })
    it('with proper heading for loggedin user ', () => {
        //cy.loginUI()
        cy.loginAPI()
        //cy.loginAPI("test@suhasini123.com", "abc123456")
        cy.visit('')
        cy.get(headerElements.homepageConduitLabel).should('be.visible').and('contain', 'conduit')
        cy.get(headerElements.loggedInpageHomeLink).should('be.visible')
        cy.get(headerElements.loggedInpageArticleLink).should('be.visible')
        cy.get(headerElements.loggedInpageSettingsLink).should('be.visible').click()
        cy.get(headerElements.homepageSiginLink).should('not.be.visible')
        cy.get(headerElements.homepageSignupLink).should('not.be.visible')
        cy.get(loginElements.logoutButton).scrollIntoView().should('be.visible').click()
        cy.get(loginElements.loggedinUserName).should('not.be.visible')
    })
})
