describe("Add To List App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // change to your app URL
  });
  it("should render the Title in UI", () => {
    cy.contains("Square & Circle").should("be.visible");
  });
  it("should have a square", () => {
    cy.get('.square').should('be.visible');
  });

  it("should have a circle", () => {
    cy.get('.circle').should('be.visible');
  });
  it("should have circle inside the square", () => {
    cy.get(".square").find(".circle").should("exist");
  });
});

