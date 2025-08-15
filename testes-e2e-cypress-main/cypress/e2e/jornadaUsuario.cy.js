describe('Testando multiplas paginas', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Deve conseguir acessar a home', () => {
        cy.getByData("botao-login").click(),
        cy.getByData("email-input").type("email@teste.com"),
        cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.location('pathname').should('eq', '/home')
        cy.getByData('select-opcoes').select('Depósito')
        cy.getByData('form-input').type('230')
        cy.getByData('realiza-transacao').click()
        cy.getById('saldo').should("exist").and("have.text", "R$ 230")
    })

})