describe('API testing - GET method', ()=> {
  


it('GET the list of users', ()=> {
cy.request('GET', 'https://gorest.co.in/public/v2/users')
  .then((response) => {                                         // allows us to get a list of users. then - когда вопрос либо выполнился, либо reject
    expect(response).to.have.property('status', 200)            // status code 200
    expect(response.body).to.not.be.null                        // body is not null
    expect(response.body).to.be.an('array');                    // body contains an array
    expect(response.body).to.have.lengthOf(10)                  // body contains 10 elements (users)
    expect(response.headers).to.have.property('connection','keep-alive') //there is a header "connection" with the property "keep-alive"
  })
})




it('GET the information about 1 user', ()=> {
cy.request('GET', 'https://gorest.co.in/public/v2/users/3837420')
  .then((response) => { 
    expect(response.body.name).to.equal('Ayushmati Talwar')     //body has the element 'name' equal to 'Ayushmati Talwar'
    expect(response.body).to.have.property('id', 3837420)       //body has the element 'id' with property 3837420
    expect(Object.keys(response.body)).to.have.lengthOf(5)      //amount of keys in response body (the "Object.keys()" method is used to retrieve an array of strings)
    expect(Object.keys(response.headers)).to.have.lengthOf(22)  //amount of response headers
    expect(response.body).to.exist;                             //body is exist
  })
})




it('GET the information about users post', ()=> {
  cy.request('GET', 'https://gorest.co.in/public/v2/users/3837420/posts')
  .then((response) => {
    expect(response.body).to.be.empty                          //body is empty
  })
})
  

})

