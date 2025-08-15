Cypress.Commands.add('getByData', (seletor) =>{
    return cy.get(`[data-test = ${seletor}]`)
})

Cypress.Commands.add('getById', (seletor) =>{
    return cy.get(`[data-testid = ${seletor}]`)
})