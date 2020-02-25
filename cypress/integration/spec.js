/// <reference types="cypress" />

const clickAntDesignSelectOption = option => {
  cy.get('.ant-select-dropdown')
    // replace the regular expression with the string to remove one of the bugs.
    // .contains(option)
    .contains(new RegExp(option, 'g'))
    .wait(2000)
    .click()
    .wait(2000);
};

describe('page', () => {
  it('works', () => {
    cy.visit('/');

    cy.contains('Toggle Modal Visibility')
      .click();

    cy.findByLabelText('One or two?')
      .click();

    clickAntDesignSelectOption('One');

    cy.findByLabelText('Three or four?')
      .click();

    clickAntDesignSelectOption('Three');
  });
});
