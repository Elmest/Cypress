import Login from './Page_object/login_page.cy.js'   //importing the class Login from the login_page.cy.js file


const email = "1@test.com"   // the email constanta is created (this variable will be used in 'validation check' tests)
const password = "Test123"   // the password constanta is created (this variable will be used in 'validation check' tests)


describe('Login_page ', ()=> {


   const login = new Login()           // login constanta is created (equal the class Login)
   
   it('validation check', function() {
    cy.viewport(1920, 1080)
    cy.visit('https://parabank.parasoft.com/')

    login.email()                      //using the login variable and email() method from the Login class
    .type(`${email}`)
    .should('have.value','1@test.com') //verification of entered email


    login.password()                  //using the login variable and password() method from the Login class
    .type(`${password}`)
    .should('have.value','Test123')   //verification of entered password 


    login. btnLogin()                 //using the login variable and btnlogin() method from the Login class
    .click()


    cy.wait(3000)

    cy.get('p[class="error"]').should('contain','An internal error has occurred and has been logged.')

   })

})





