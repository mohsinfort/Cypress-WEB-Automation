/// <reference types="cypress"/>

describe('Data driven testing',function() {

    before(function() {
        cy.fixture("example").then(function(data) {
            this.data=data
        })
    })

    it('Fixture Demo',function() {
        cy.visit("https://admin-demo.nopcommerce.com/login")

        cy.get("input[type='email']").should('be.enabled').clear().type(this.data.email);
        cy.get("input[type='password']").clear().type(this.data.password);
        cy.get("button[type='Submit']").click();
        
    })
})