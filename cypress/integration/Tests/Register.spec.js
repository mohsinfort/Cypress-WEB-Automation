/// <reference types="cypress"/>

describe('Handling Registration form',function() {
    // it('Verify Name Text Box',function() {

    //     //Browse the URL
    //     cy.visit("http://way2automation.com/way2auto_jquery/registration.php")

    //     //Enter name in Firname and Last name fields
    //     cy.get("p > input[name='name']").should('be.enabled').type('Mohsin')
    //     cy.get(".fieldset > p:nth-child(2) > input").should('be.enabled').type('Nazir')

    // })

    it('Verify Radio Buttons',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Check the Marital Status radio button
        
        cy.get("input[value='radio1']").click();
        //switch to 2nd radio button
        cy.get("input[value='radio2']").click();

    })

    it('Verify Check boxes',function() {

        //Check checkBoxes
        cy.get("#checkBoxOption1").check().should('be.checked');
        
        //UnCheck checkBoxes
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
        
        
        //Check multiple checkBoxes
        cy.get("input[value*='option']").check().should('be.checked');

    })

    it('Verify Static Drop downs',function() {
        
        cy.get("#dropdown-class-example").select('Option2').should('have.value','option2');


    })

    
})