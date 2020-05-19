Cypress.Commands.add("loginAPI", () => {
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login',
        method: 'POST',
        body: {
            user: {
                //email: "test@s.com",
                //password: "abc123456"
                email: "test@suhasini123.com",
                password: "abc123456"
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        window.localStorage.setItem('jwtToken', response.body.user.token)
    })
})
Cypress.Commands.add("loginAPI1", (email, password) => {
    //const username1 = "sua" + Math.random().toString().slice(2, 20)
    //const email1 = username + '@test.com'
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login',
        method: 'POST',
        body: {
            user: {
                email: email,
                password: "abc123456"            
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        window.localStorage.setItem('jwtToken', response.body.user.token)
    })
})
Cypress.Commands.add("loginAPIEnv", (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users/login',
        body: {
            user: {
                email: email,
                password: password
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        window.localStorage.setItem('jwtToken', response.body.user.token)
    })

})