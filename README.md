<h1 align="center">Projeto Full Stack - Cadastro de Clientes 🛍</h1>

<h4>Esta é a parte Back-end do projeto, que trata-se de uma página onde cada usuário pode se cadastrar, fazer o login e a partir disto, gerenciar o cadastro/contatos de seus próprios clientes.</h4>

<h2 align="center"><a target=blank href="https://jeanmbiz.github.io/doc-api-cadastro-clientes/">Clique aqui para ver a documentação da API</a></h2>

## 💻 Linguagens e tecnologias utilizadas

- Express
- TypeORM
- PostgreSQL

## Funcionalidades da aplicação

- Cadastro de usuário
- Login do usuário
- Editar dados do usuário
- Excluir o próprio usuário
- Adicionar Clintes
- Listar Clientes
- Editar Clientes
- Excluir Clientes

## Instalação

    - Clonar repositório:
    $ git@github.com:jeanmbiz/api-cadastro-clientes.git

    - Instalar dependências:
    $ yarn

    - Configurar arquivo .env com base no .env.example preenchendo informações do banco de dados

    - Executar Migração
    $ yarn typeorm migration:run -d src/data-source

    - Rodar Servidor
    $ yarn dev
