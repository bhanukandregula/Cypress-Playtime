describe('POST tests demo', () => {

    // This will pick baseUlr from cypress.json file by default since we have declared there.
    // Cypress.config('baseUrl', "https://reqres.in/api");

    it('POST REQUEST DEMO 01', () => {
        cy.request({
            'method' : 'POST',
            'url' : '/users',
            body: {
                "name" : "Bhanu Prakash",
                "job" : "Software Engineer"
            }
        }).then((response) => {
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', 'Bhanu Prakash');
       });
    });


    it('POST REQUEST DEMO 02', () => {

        const requestBody = {
            "name" : "Bhanu Kandregula",
            "job" : "Founder"
        }

        cy.request('POST', '/users', requestBody).then((response) => {
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', 'Bhanu Kandregula');
       });
    });
})