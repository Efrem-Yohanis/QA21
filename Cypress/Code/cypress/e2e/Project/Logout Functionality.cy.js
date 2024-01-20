describe('Logout Functionality',()=>{
    it('Verify that the system successfully  logout',()=>{
         //1. visit
        cy.visit('https://end-to-end-v1.onrender.com/')
        // 2. select element and 3. intract with element
        cy.get('#username').type('test')
        cy.get('#password').type('test')
        cy.get('button').click()
        // 4. Assertion 
        cy.url().should('eq','https://end-to-end-v1.onrender.com/home/')
       
        // logout from system 

        cy.xpath("//a[normalize-space()='Log out']").click()
      
        // 4. Assertion 
        cy.url().should('eq','https://end-to-end-v1.onrender.com/')

        // trying to accesing home page with out login 

        cy.visit('https://end-to-end-v1.onrender.com/home/')
        
        cy.xpath("//h2[normalize-space()='Registered Users']").should('not.exist')
        
       
    })

})