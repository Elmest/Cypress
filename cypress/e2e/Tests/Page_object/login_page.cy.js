class Login {                                    //class Login is created
                                    
    btnLogin(){
        return  cy.get('input[type="submit"]')

    }

    email(){
        return cy.get('input[type="text"]')
    }

    password(){
        return cy.get('input[type="password"]')
    }
}

export default Login                            //class Login is exported