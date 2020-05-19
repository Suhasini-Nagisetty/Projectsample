import headerElements from '../objects/header.obj'
import settings from '../objects/settings.obj'

describe('settingsfields', () => {
    it('with proper heading for loggedin user with settings feilds ', () => {
        cy.loginUI()
        cy.get(headerElements.homepageConduitLabel).should('be.visible').and('contain', 'conduit')
        cy.get(headerElements.loggedInpageHomeLink).should('be.visible')
        cy.get(headerElements.loggedInpageArticleLink).should('be.visible')
        cy.get(headerElements.loggedInpageSettingsLink).should('be.visible').click()
        cy.get(settings.fieldsusername).should('be.visible')
        cy.get(settings.fieldsshortbio).should('be.visible').clear().type('SN')
        cy.get(settings.updatesettingsButton).should('be.visible').click()
        cy.get(settings.image).should('be.visible')
        cy.get(settings.settingsprofilename).should('be.visible')
        cy.get(settings.profilebio).should('be.visible').and('contain', 'SN')
        cy.get(settings.editprofilelink).should('be.visible')
    })
    it('update email and verify it was saved', () => {
        cy.RegisterAPI().then((email) => {
            cy.loginAPI1(email, "abc123456")
        })
        cy.visit('/settings')
        const emailrand = "test" + Math.random().toString().slice(10, 20) + 'sn@sn1.com'
        cy.get(settings.fieldemail).should('be.visible').clear().type(emailrand)
        cy.get(settings.updatesettingsButton).scrollIntoView().should('be.visible').click()
        cy.get(settings.editprofilelink).should('be.visible').click()
        cy.wait(2000)
        cy.get(settings.fieldemail).should('be.visible').and('have.value', emailrand)
        cy.loginAPI1(emailrand, "abc123456")
    })
})