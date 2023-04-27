/* eslint-disable no-undef */
describe("Register card", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("check validation Messages", () => {
    cy.contains("button", "Criar Card").click();
    cy.contains("p", "O campo nome deve ser preenchido").should("be.visible");
    cy.contains("p", "O campo cargo deve ser preenchido").should("be.visible");
    cy.contains("p", "O campo nome deve ser preenchido").should("be.visible");
    cy.contains("p", "Selecione um time para essa pessoa").should("be.visible");
  });

  it("Create card", () => {
    cy.get("input#form-nome").type("Alissson");
    cy.get("input#form-cargo").type("QA");
    cy.get("input#form-imagem").type(
      "https://media.licdn.com/dms/image/D4D03AQG6tq9oTV-FEA/profile-displayphoto-shrink_800_800/0/1679336489603?e=1687996800&v=beta&t=NefbepeoiEO5eEaeDcBPMvUb7Pvb-DfRfSWfQ5zKWiA"
    );
    cy.get("select").select("Programação");
    cy.contains("button", "Criar Card").click();

    cy.contains("div", "colaborador").should("be.visible");
  });
});
