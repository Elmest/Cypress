//first of all you should get the bearer token from https://gorest.co.in/consumer/login

import { bearerToken } from "./constanta"    //imported variable from the constanta.js file


describe('API testing - POST method', function() {

    it('User creating', ()=> {


    const bodyData = {
        name:"Test Dmitry",
        gender:"male",
        email:"11@test.com",        //email should be unique
        status:"active"
    }


    const headersData = {
        'Content-Type':'application/json',
        'Authorization':bearerToken 
        

    }

     cy.request({
        method: 'POST', 
        url: 'https://gorest.co.in/public/v2/users',
        body: bodyData,
        headers: headersData
        })

        .then((response) => {
            expect(response.body.name).to.equal('Test Dmitry')
            expect(response.status).to.be.oneOf([200,201])    //we should get one of the status code (200 or 201)
     }) 
     
     
    })
})