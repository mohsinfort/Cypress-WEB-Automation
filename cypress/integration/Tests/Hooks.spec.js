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