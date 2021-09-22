# Cypress-WEB-Automation

Navigate to URL 
	Use visit(“URL”) to navigate to a URL.
        cy.visit("https://demo.nopcommerce.com")

Locate a web element
	Use get(“locator”) and pass css selector to locate an element.
	#Id and Dot(.)class can be used.        
  cy.get(".search-box-button").click();

Type text in the text field.
Locate the element then use type(“text”) to enter text.
cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");

	To enter Enter command,
	cy.get("#small-searchterms").type("{enter}");
	To clear textfield use clear()             
  cy.get("input[id='product_enteredQuantity_4']").clear().type('4');

	
To click the Button         
cy.get("button[id='add-to-cart-button-4']").click();
To select radio buttons
 
    it('Verify Radio Buttons',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Check the Marital Status radio button
        
        cy.get("input[value='radio1']").click();
        //switch to 2nd radio button
        cy.get("input[value='radio2']").click();
 
    })

Handle checkboxes
 
        //Check checkBoxes
        cy.get("#checkBoxOption1").check().should('be.checked');
        
        //UnCheck checkBoxes
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
        
        
        //Check multiple checkBoxes
        cy.get("input[value*='option']").check().should('be.checked');

Handle static drop downs
        
        cy.get("#dropdown-class-example").select('Option2').should('have.value','option2');

Handling navigations
 
        
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

Handling HTML tables
        cy.visit("http://testautomationpractice.blogspot.com/")
 
        //Check value presence anywhere in table
        cy.get("table[name='BookTable']").contains('td','Learn JS').should('be.visible');
 
        //Check value presence in specific row and table
        cy.get("table[name='BookTable'] > tbody > tr:nth-child(5) > td:nth-child(4)").contains('3000').should('be.visible');
 
        //conditional value presence
 
        cy.get("table[name='BookTable']>tbody > tr td:nth-child(2)").each(($Author,index,$List)=>{
            const AuthorName= $Author.text()
            if(AuthorName.includes("Javascript")){
                cy.get("table[name='BookTable']>tbody > tr td:nth-child(1)").eq(index).then(function(BookName) {
                    expect(BookName.text()).to.equal('Learn JS');
                })
            }
        })
Hooks in cypress
/// <reference types="cypress"/>
 
describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
      cy.log("############ before ##############")
    })
  
    beforeEach(() => {
      // runs before each test in the block
      cy.log("############# beforeEach ##################")
    })
  
    afterEach(() => {
      // runs after each test in the block
      cy.log("################## AfterEach ##############")
    })
  
    after(() => {
      // runs once after all tests in the block
      cy.log("############# After ###############")
    })
 
    it('First Test',function() {
        cy.log("First test")
    })
 
    it('Second Test',function() {
        cy.log("Second test")
    })
 
    it('Third Test',function() {
        cy.log("Third test")
    })
  })

FixtureDemo
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

13. Alerts Handling


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
 

