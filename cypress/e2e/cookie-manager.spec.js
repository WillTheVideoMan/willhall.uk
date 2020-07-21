/// <reference types="Cypress" />

// Cookie manager is currently disabled.

/* 
describe("Cookie manager tests", () => {
  it("launches the cookie manager when first visiting the page", () => {
    cy.visit("/").get("main")
    cy.get('[name="mtm-frame-prompt"]').should("be.visible")
  })

  it("closes the cookie manager when prompt is clicked", () => {
    cy.getIframeBody('[name="mtm-frame-prompt"]').within(() => {
      cy.contains("This is okay").click()
    })
    cy.get('[name="mtm-frame-prompt"]').should("not.be.visible")
  })

  it("launches the cookie manager when the management prompt is clicked", () => {
    cy.visit("/").get("main")
    cy.findByTestId("cookie-manager").click()
    cy.get('[name="mtm-frame-prompt"]').should("be.visible")
  })
})
*/
