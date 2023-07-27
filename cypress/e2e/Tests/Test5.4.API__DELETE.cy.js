//first of all you should get the bearer token from https://gorest.co.in/consumer/login
//you should get the user ID as result of the request from the Test5.2.API_POST.cy.js

import { bearerToken } from "./constanta";
import { userId } from "./constanta";


describe('API testing - DELETE method', ()=> {
    it('User deleting', ()=> {
        

        const headersData = {
            "Content-Type":"application/json",
            "Authorization":bearerToken
        }

        cy.request({
            method: 'DELETE',
            url:`https://gorest.co.in/public/v2/users/${userId}`,  //user id we can get as result of the request from the Test5.2.API_POST.cy.js
            headers: headersData
        })
        .then((response) => {

            expect(response.body).to.be.empty                      //body has the element 'name' equal to 'Dmitry-test'
            expect(response.status).to.equal(204)                  //response has the status code 200
        })

    })
})