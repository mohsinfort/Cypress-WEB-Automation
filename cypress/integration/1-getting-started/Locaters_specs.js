/// <reference types="cypress"/>
describe('Locating elements ',function(){
    it('verify types of locaters',function() {
        cy.visit("https://demo.nopcommerce.com")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
        cy.get(".search-box-button").click();
        cy.get(".product-box-add-to-cart-button").click();
        cy.get("input[id='product_enteredQuantity_4']").clear().type('4');
        cy.get("button[id='add-to-cart-button-4']").click();

        cy.get(".cart-label").click()

        cy.get(".product-unit-price").contains("$1,800.00")
    })

})