describe('My First Test', () => {

    it('verifyTitle',()=>{
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eq','nopCommerce demo store')
    })
})