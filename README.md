<h1 align="center">Projeto Full Stack - Cadastro de Clientes 🛍</h1>

<h4>Este projeto trata-se do Back-end de uma pagina onde cada usuário se cadastra, após isto é possível fazer o login na página, onde cada usuário pode cadastrar os contatos de seus próprios clientes.</h4>


<h2 align="center"><a target=blank href="https://jeanmbiz.github.io/doc-api-cadastro-clientes/">Clique aqui para ver a documentação do projeto</a></h2>


## 📺 Imagem

</details> 

## 💻 Linguagens e tecnologias utilizadas
<p align="left"> 
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

    - Clonar repositorio
    $ git@github.com:jeanmbiz/api-cadastro-clientes.git

    - Instalar dependencias
    $ yarn

    - Configurar arquivo .env com base no .env.example preenchendo informações do banco de dados
    
    - Executar Migração
    $ yarn typeorm migration:run -d src/data-source

    - Rodar Servidor
    $ yarn dev
    