describe("Users API", () => {
  it("should see a list of users", () => {
    cy.visit("http://localhost:8080/");

    //espiona solicitacoes de rede
    cy.server();
    
    //configura endpoint
    cy.route({
      url: "/api/users/",
      method: "GET",
      response: [
        {
          name: "Juliana",
          surname: "Crain"
        },
        { name: "Molly", surname: "F." }
      ]
    });

    cy.contains("FETCH").click();
  });
});