Cypress.Commands.add("RegisterAPI", () => {
    const username = "sun" + Math.random().toString().slice(2, 20)
    const email = username + '@test.com'
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users',//how about the url
        body: {
            user: {
                username: username,
                email: email,
                password: "abc123456"
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        return email
    })
})
Cypress.Commands.add("RegisterAPIEnv", (username1 = Cypress.env('username'), email1 = Cypress.env('email'), password1 = Cypress.env('password')) => {
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users',
        body: {
            user: {
                username: username1,
                email: email1,
                password: password1
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        return email
    })
})
