// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('input[placeholder="Username"]').type(username);
  cy.get('input[placeholder="Password"]').type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('addAllProductsToCart', () => {
  cy.get('#add-to-cart-sauce-labs-backpack').click();
  cy.get('#add-to-cart-sauce-labs-bike-light').click();
  cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
  cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
  cy.get('#add-to-cart-sauce-labs-onesie').click();
  cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click();
});

Cypress.Commands.add('checkout', (firstName, lastName, zipCode) => {
  cy.get('.shopping_cart_link').click();
  cy.get('#checkout').click();
  cy.get('input[placeholder="First Name"]').type(firstName);
  cy.get('input[placeholder="Last Name"]').type(lastName);
  cy.get('input[placeholder="Zip/Postal Code"]').type(zipCode);
  cy.get('#continue').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});




