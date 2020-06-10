/// <reference types="cypress" />

describe('page', () => {
  it('works', () => {
    cy.visit('/');

    expect({
      v1: 1,
      v2: 2
    }).to.have.key('v1');
  });
});
