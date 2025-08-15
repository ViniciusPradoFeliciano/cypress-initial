describe('Forumalário de Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Realizando cadastro com sucesso', () => {
        function getRandomInt() {
            return Math.floor(Math.random() * 1000);
        }

        cy.getByData("botao-cadastro").click()
        cy.getByData("nome-input").type("nome teste " + getRandomInt())
        cy.getByData("email-input").type("email" + getRandomInt() + "@teste.com")
        cy.getByData("senha-input").type("SenhaTeste!" + getRandomInt())
        cy.getByData("checkbox-input").click()
        cy.getByData("botao-enviar").click()
        cy.getByData("titulo-principal").should("exist").and("have.text", "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!")
    })

    it('Deixando o campo nome em branco', () => {
        function getRandomInt() {
            return Math.floor(Math.random() * 1000);
        }

        cy.getByData("botao-cadastro").click()
        cy.getByData("email-input").type("email" + getRandomInt() + "@teste.com")
        cy.getByData("senha-input").type("SenhaTeste!" + getRandomInt())
        cy.getByData("checkbox-input").click()
        cy.getByData("botao-enviar").click()
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O campo de nome é obrigatório")
    })

    it('Deixando o campo email em branco', () => {
        function getRandomInt() {
            return Math.floor(Math.random() * 1000);
        }

        cy.getByData("botao-cadastro").click()
        cy.getByData("nome-input").type("nome" + getRandomInt())
        cy.getByData("senha-input").type("SenhaTeste!" + getRandomInt())
        cy.getByData("checkbox-input").click()
        cy.getByData("botao-enviar").click()
        cy.getByData("mensagem-erro").should("exist").and("have.text", "E-mail já cadastrado!")
    })

})