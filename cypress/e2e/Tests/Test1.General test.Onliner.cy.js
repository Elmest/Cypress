describe('Onliner web app. General test', ()=> { 
    //describe() - function, then i wrote the type of test name. ()=> arrow function, or we can write function ()
    
    
    //name of the test
    it('Onliner profile visiting', function() {
    
        cy.viewport(1920, 1080)
        //set vieport
        cy.visit('https://www.onliner.by/')           
        //cy - it's mean Cypress. We ask the Cypress Then we used method visit that allows us go to the url.  
        cy.contains ('Вход').click()       
        //contains - the button or links name
        //click - function thats mean action       
        cy.get('input[placeholder="Ник или e-mail"]').type('1@test.com').should('have.value','1@test.com') //verification of entered email
        cy.get('input[type="password"]').type('Test123').should('have.value','Test123') //verification of entered password 
        cy.get('div[class="auth-input__helper auth-input__helper_visible auth-form__input-helper auth-input__helper_secure"]').click()
        cy.wait(3000)
        //time interval between steps 
        cy.get ('button[class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]').click()
        cy.get('div[class="auth-form__line auth-form__line_condensed"]').should('contain', 'Неверный логин или пароль') //validation check
        cy.get('input[placeholder="Ник или e-mail"]').clear() //removes the previous value
        cy.get('input[placeholder="Ник или e-mail"]').type('9851123@mail.ru')
        cy.get ('button[class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]').click()
        

      })
    }) 