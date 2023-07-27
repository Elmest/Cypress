describe('Amazon app. General test ', ()=> {
   it('Some checks:  protocol, search field', function() {
    cy.viewport(1920, 1080)
    cy.visit('https://www.amazon.com/')
    cy.location('protocol').should('eql', 'https:') // https protocol is used
    cy.title().should('eql','Amazon.com. Spend less. Smile more.') //title check
    cy.get('input[id="twotabsearchtextbox"]').should('be.visible') // the search field is visible
    cy.get('input[id="twotabsearchtextbox"]').should('have.value','') // the seatch field is empty
   });

   it('Search field works correctly', ()=> {
   cy.viewport(1920, 1080)
   cy.visit('https://www.amazon.com/') 
   cy.get('input[id="twotabsearchtextbox"]').type('Iphone 14').should('have.value', 'Iphone 14')
   cy.get('input[id="nav-search-submit-button"]').click()
   })

   it('Check boxes are checked', ()=> {
      cy.viewport(1920, 1080)
      cy.visit('https://www.amazon.com/s?k=iphone+14&crid=2P8T4RK09KEV9&sprefix=iphone+14%2Caps%2C266&ref=nb_sb_noss_2')
      cy.get('li[id="p_89/Apple"]').should('not.have.checked')
      cy.get('li[aria-label="Apple"] > span[class="a-list-item"] > a[class="a-link-normal s-navigation-item"] > div[class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"] > label > input[type="checkbox"]').click({ force: true }) // investigate how to check checkboxes
      cy.get('li[aria-label="Apple"] > span[class="a-list-item"] > a[class="a-link-normal s-navigation-item"] > div[class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"] > label > input[type="checkbox"]').should('be.checked')


   })
})