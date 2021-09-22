/// <reference types="cypress"/>

describe('Alerts Handling',function() {

    it('Verify Alerts are handled Automatically',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Generate an alert
        cy.get("#name").type("Hello");
        cy.get("#alertbtn").click();

        cy.on('window:alert',(str)=>{
            expect(str).to.include('share this practice page and share your knowledge');
        })


    })

    it('Verify Confirm Alerts are handled Automatically',function() {

        //Generate an alert
        cy.visit("http://testautomationpractice.blogspot.com/");
        cy.get("button[onclick='myFunction()']").click();

        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!');
        })

        //Confirm you pressed ok
        cy.get("#demo").contains('You pressed OK!')


    })

    it('Verify Confirm Alerts Cancel Event',function() {
        //test cancel on Alerts
        cy.get("button[onclick='myFunction()']").click();

        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!');
            return false;
        })

        //Confirm you pressed Cancel
        cy.get("#demo").contains('You pressed Cancel!')

    })

})