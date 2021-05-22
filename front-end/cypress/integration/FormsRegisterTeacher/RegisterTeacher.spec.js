/// <reference types="cypress" />

describe('Cadastrar um professor', () => {
  it('devem poder realizar um cadastro de um professor', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="name"]').type('Olinda Gomes Lopes');
  });
})
