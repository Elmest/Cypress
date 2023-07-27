//first of all you should get the bearer token from https://gorest.co.in/consumer/login
//you should get the user ID as result of the request from the Test5.2.API_POST.cy.js

import { bearerToken } from "./constanta";
import { userId } from "./constanta";


describe('API testing - PUT method', ()=> {
    it('User updating', ()=> {
        
        const bodyData = {
             "name":"Dmitry-test",
             "email":"12@test.com",
             "status":"active"
        }

        const headersData = {
            "Content-Type":"application/json",
            "Authorization":bearerToken
        }

        cy.request({
            method: 'PUT',
            url:`https://gorest.co.in/public/v2/users/${userId}`,   //user id we can get as result of the request from the Test5.2.API_POST.cy.js
            body: bodyData,
            headers: headersData
        })
        .then((response) => {

            expect(response.body).to.not.be.null                  //body is not null
            expect(response.body.name).to.equal('Dmitry-test')    //body has the element 'name' equal to 'Dmitry-test'
            expect(response.body.status).to.equal('active')       //body has the element 'status' equal to 'active'
            expect(response.status).to.equal(200)                 //response has the status code 200
        })

    })
})