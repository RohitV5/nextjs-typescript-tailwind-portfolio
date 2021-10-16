/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find our cv page", () => {
    cy.get("span").contains("Rohit");
  });
});
