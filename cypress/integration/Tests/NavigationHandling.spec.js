/// <reference types="cypress"/>

describe('Handling Registration form',function() {

    it('Verify Navigations',function() {

        
        cy.visit("http://testautomationpractice.blogspot.com/");
        cy.title().should('eq','Automation Testing Practice');
        cy.go(-1)//to go back

        cy.title().should('eq','Practice Page');
        cy.go(1)//to navigate forward
        cy.title().should('eq','Automation Testing Practice');

        cy.go('back')//to go back

        cy.title().should('eq','Practice Page');
        cy.go('forward')//to navigate forward
        cy.title().should('eq','Automation Testing Practice');


    })
})