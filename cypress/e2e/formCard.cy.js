/* eslint-disable no-undef */
describe("Register card", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('check validation Messages', () =>{
    cy.contains('button', 'Criar Card').click()
    cy.contains('p', 'O campo nome deve ser preenchido').should('be.visible')
    cy.contains('p', 'O campo cargo deve ser preenchido').should('be.visible')
    cy.contains('p', 'O campo nome deve ser preenchido').should('be.visible')
    cy.contains('p', 'Selecione um time para essa pessoa').should('be.visible')
  })
});
