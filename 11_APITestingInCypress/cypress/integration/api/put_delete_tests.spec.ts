describe('PUT and DELETE tests demo', () => {

    it('PUT demo 01', () => {
        cy.request({
            "method" : "PUT",
            "url" : "/users/2",
            body : {
                "name" : "Irfan Aktar",
                "job" : "Sportsman"
            },
            headers: {
                "Content-Type" : 'application/json'
            },
            // auth : {
            //     'username' : 'username',
            //     'password' : 'password'
            // }
         }).then((response) => {
             expect(response.body).has.property("name", "Irfan Aktar");
             expect(response.status).to.eq(200);
         });
    });

    it('DELETE demo 01', () => {
        cy.request("DELETE", "/users/2").then((response) => {
            expect(response.body).to.be.empty;
            expect(response.status).to.eq(204);
        });
    });

})