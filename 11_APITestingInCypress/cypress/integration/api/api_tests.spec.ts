describe("all api tests", () => {
  it("GET request demo", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      cy.log("This is the API GET response", response);

      // These two will check API response is 200 ?
      expect(response).to.have.property("status", 200);
      expect(response.status).to.equal(200);

      // This check response body is not null.
      expect(response.body).not.to.be.null;

      // This will check length of array is 6 ?
      expect(response.body.data).to.have.length(6);

      // This will check If we hav epager property to 2 ?
      expect(response.body).to.have.property("page", 2);
    });
  });

  it("GET request demo 02", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").as("user_list");
    cy.get("@user_list").should((response) => {

      // These two will check API response is 200 ?
      expect(response).to.have.property("status", 200);
      expect(response.status).to.equal(200);

      // This check response body is not null.
      expect(response.body).not.to.be.null;

      // This will check length of array is 6 ?
      expect(response.body.data).to.have.length(6);

      // This will check If we hav epager property to 2 ?
      expect(response.body).to.have.property("page", 2);
    });

  });

  it("GET request demo 03", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            // These two will check API response is 200 ?
        expect(response).to.have.property("status", 200);
        expect(response.status).to.equal(200);

        // This check response body is not null.
        expect(response.body).not.to.be.null;

        // This will check length of array is 6 ?
        expect(response.body.data).to.have.length(6);

        // This will check If we hav epager property to 2 ?
        expect(response.body).to.have.property("page", 2);
        });

    });

});


