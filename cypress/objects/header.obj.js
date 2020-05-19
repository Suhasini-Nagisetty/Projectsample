module.exports = {
    homepageConduitLabel: '.navbar-brand.ng-binding',
    homepageHomelink: 'ul[show-authed="false"] li:nth-child(1) a[ui-sref="app.home"]',
    homepageSiginLink: 'ul[show-authed="false"] li:nth-child(2) a[ui-sref="app.login"]',
    homepageSignupLink: 'ul[show-authed="false"] li:nth-child(3) a[ui-sref="app.register"]',
    homepageRegisterLink: 'ul[show-authed="false"] li:nth-child(3) a[href="#/register"]',
    homepageLabel: 'h1[ng-bind="$ctrl.title"]',
    homepageNeedanAccountLink: 'p a[href="#/register"]',
    homepageHaveanAccountLink: 'p a[ui-sref="app.login"]',
    usernameField: 'input[ng-model="$ctrl.formData.username"]',
    loggedInpageHomeLink: 'ul[show-authed="true"] li:nth-child(1)',
    loggedInpageArticleLink: 'ul[show-authed="true"] li:nth-child(2)',
    loggedInpageSettingsLink: 'ul[show-authed="true"] li:nth-child(3)',
    homepageConduitLogo: 'div h1[ng-bind="::$ctrl.appName | lowercase"]',
    homepageConduitMsg: 'div h1[ng-bind="::$ctrl.appName | lowercase"]+p'
}
