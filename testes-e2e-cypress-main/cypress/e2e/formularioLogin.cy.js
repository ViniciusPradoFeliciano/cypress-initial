describe('Forumalário de Login', ()=> {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/');
    })

    it('Não deve permitir um email inválido', () => {
        cy.getByData("botao-login").click(),
        cy.getByData("email-input").type("email@teste"),
        cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O email digitado é inválido")
    })

    it('Tentar enviar uma senha vázio', () => {
        cy.getByData("botao-login").click(),
         cy.getByData("email-input").type("email@teste.com"),
        cy.getByData("botao-enviar").click(),
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O campo de senha é obrigatório")
    })

     it('Tentar enviar um email vázio', () => {
        cy.getByData("botao-login").click(),
         cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O campo email é obrigatório")
    })
})