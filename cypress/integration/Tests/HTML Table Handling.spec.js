/// <reference types="cypress"/>

describe('HTML Tables',function() {
    it('Find Element in table',function() {
        cy.visit("http://testautomationpractice.blogspot.com/")

        //Check value prensence anywhere in table
        cy.get("table[name='BookTable']").contains('td','Learn JS').should('be.visible');

        //Check value prensence in specific row and table
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

    })
})