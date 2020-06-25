/// <reference types="Cypress" />

describe("a11y accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("does not violate any accessibility rules on load", () => {
    cy.checkA11y()
  })
})
