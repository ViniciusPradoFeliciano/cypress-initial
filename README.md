📌 Cypress Initial

Repositório contendo a configuração inicial e cenários de teste end-to-end (E2E) utilizando Cypress para o projeto Bytebank.

O objetivo é automatizar testes funcionais, garantindo que as principais funcionalidades da aplicação sejam validadas de forma confiável.

📂 Estrutura do Projeto
.
├── api-bytebank/              # API fake (json-server) para simulação de dados
├── testes-e2e-cypress-main/    # Testes E2E criados com Cypress
└── README.md                   # Documentação do projeto

🚀 Tecnologias Utilizadas

Cypress – Automação de testes E2E

JavaScript (ES6+)

HTML/CSS

json-server – API fake para simular backend

Node.js – Ambiente de execução

🧪 Exemplos de Cenários de Teste

Cadastro de usuário com sucesso

Login e autenticação

Validação de formulários

Fluxos de navegação entre páginas

Operações bancárias simuladas

🔧 Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU-USUARIO/cypress-initial.git
cd cypress-initial

2️⃣ Instalar dependências
npm install

3️⃣ Subir a API fake (json-server)
npm run api


A API ficará disponível em: http://localhost:8080

4️⃣ Rodar a aplicação frontend
npm start

5️⃣ Executar os testes Cypress

Abrir o modo interativo:

npx cypress open


Ou rodar em modo headless:

npx cypress run

📄 Licença

Este projeto está licenciado sob a licença MIT – sinta-se livre para usar e modificar.
