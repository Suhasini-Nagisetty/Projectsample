import headerElements from '../objects/header.obj'
import articleElements from '../objects/newarticle.obj'
describe('newarticlefeilds', () => {
    it('with proper heading for loggedin user ', () => {
        cy.loginAPI("test@suhasini123.com", "abc123456")
        cy.visit('')
        cy.get(headerElements.homepageConduitLabel).should('be.visible').and('contain', 'conduit')
        cy.get(headerElements.loggedInpageHomeLink).should('be.visible')
        cy.get(headerElements.loggedInpageSettingsLink).should('be.visible')
        cy.get(headerElements.loggedInpageArticleLink).should('be.visible').click()
        cy.url().should('include','/editor')
        cy.get(articleElements.articletitle).should('be.visible')
        cy.get(articleElements.articleabout).should('be.visible')    
        cy.get(articleElements.entertag).should('be.visible')      
        cy.get(articleElements.publishbutton).should('be.visible').and('contain', 'Publish Article')//.click()
    })
})