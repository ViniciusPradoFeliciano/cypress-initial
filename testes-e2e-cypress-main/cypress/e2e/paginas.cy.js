describe('Testando multiplas paginas', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Deve conseguir acessar a página de cartões', () => {
        cy.getByData("botao-login").click(),
        cy.getByData("email-input").type("email@teste.com"),
        cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.get(':nth-child(2) > .Menu_link__91LyM').click()
        cy.getByData("titulo-cartoes").should("exist").and("have.text", "Meus cartões")
        cy.location('pathname').should('eq', '/home/cartoes')
    })

    it('Deve conseguir acessar a página de Serviços', () => {
        cy.getByData("botao-login").click(),
        cy.getByData("email-input").type("email@teste.com"),
        cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.get(':nth-child(3) > .Menu_link__91LyM').click()
        cy.get(':nth-child(3) > h5').should("exist").and("have.text", "Doações")
        cy.location('pathname').should('eq', '/home/servicos')
    })

    it('Deve conseguir acessar a página de Investimentos', () => {
        cy.getByData("botao-login").click(),
        cy.getByData("email-input").type("email@teste.com"),
        cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.get(':nth-child(4) > .Menu_link__91LyM').click()    
        cy.get('.Investimentos_investimentos__l8Bp6 > h2').should("exist").and("have.text", "Investimentos")
        cy.location('pathname').should('eq', '/home/investimentos')
    })

     it('Deve conseguir acessar a home', () => {
        cy.getByData("botao-login").click(),
        cy.getByData("email-input").type("email@teste.com"),
        cy.getByData("senha-input").type("SenhaTeste!"),
        cy.getByData("botao-enviar").click(),
        cy.get(':nth-child(2) > .Menu_link__91LyM').click()
        cy.get('.Menu_menu__oLKwP > :nth-child(1)').click()
        cy.get('.Formulario_legenda__opcoes__uup4l').should("exist").and("have.text", "Nova Transação")
        cy.location('pathname').should('eq', '/home')
    })
})