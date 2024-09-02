///<reference types="Cypress" />

describe('test login y compra', { testIsolation: false }, () => {
  
    beforeEach(() => {
      cy.fixture('users').as('users');
    });
  
    it('login standar-user', () => {
      cy.fixture('users').then(({ standard_user }) => {
        cy.log(standard_user.username, standard_user.password);
        cy.logout();
      });
    });
  
    it('compra con standard-user', () => {
      cy.fixture('users').then(({ standard_user }) => {
        cy.log(standard_user.username, standard_user.password);
        cy.addAllProductsToCart();
        cy.wait(1000);
      });
    });
  
    it('checkout standard-user', () => {
      cy.fixture('users').then(({ standard_user }) => {
        cy.log(standard_user.username, standard_user.password);
        cy.addAllProductsToCart();
        cy.checkout('Juan', 'De los palotes', '5000');
      });
    });
  
    it('logout standard-user', () => {
      cy.fixture('users').then(({ standard_user }) => {
        cy.log(standard_user.username, standard_user.password);
        cy.logout();
      });
    });
  
    it('login problem-user', () => {
      cy.fixture('users').then(({ problem_user }) => {
        cy.log(problem_user.username, problem_user.password);
        cy.wait(3000);
      });
    });
  
    it('compra con problem-user', () => {
      cy.fixture('users').then(({ problem_user }) => {
        cy.log(problem_user.username, problem_user.password);
        cy.addAllProductsToCart();
        cy.wait(1000);
      });
    });
  
  });
  
  
