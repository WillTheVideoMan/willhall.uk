/**
 * Import all cypress support libraries here.
 */

import "cypress-axe"
import "@testing-library/cypress/add-commands"

/**
 * Wrap iframes in Cypress.
 */
Cypress.Commands.add("getIframeBody", selector => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return (
    cy
      .get(selector)
      .its("0.contentDocument.body")
      .should("not.be.empty")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  )
})
