# Documentação Geral da API - Desafio-4-sistemaDetran

## Visão Geral

Esta API foi desenvolvida como parte da solução do desafio final do processo trainee da EngNet. Ela foi construída utilizando Node.js e Express, seguindo uma estrutura inspirada no padrão MVC (Model-View-Controller). O sistema gerencia três recursos principais:

- **Motoristas**
- **Veículos**
- **Multas**

Cada recurso possui seus endpoints correspondentes para operações de criação, consulta e deleção, permitindo a interação com um banco de dados por meio de chamadas assíncronas utilizando callbacks.

> **Observação:**  
> O código atual utiliza callbacks para tratar operações assíncronas. Caso seja de interesse, é possível refatorar a implementação para async/await visando melhorar a legibilidade e o tratamento de erros, desde que os métodos dos modelos sejam adaptados para retornar Promises.

## Estrutura do Projeto

O backend do projeto está organizado da seguinte maneira:
- **Controllers:**  
  Localizados na pasta `backend/controllers`, os controllers são responsáveis por receber as requisições, validar os dados, invocar os métodos dos modelos e enviar as respostas HTTP.
  
- **Modelos:**  
  Conforme a estrutura MVC, a pasta `backend/models` contém a lógica de acesso ao banco de dados e manipulação dos dados referentes a cada recurso (motoristas, veículos, multas).

- **Rotas:**  
  Os arquivos dentro da pasta `backend/routes` definem as rotas que mapeiam os endpoints da API para as funções específicas dos controllers.

- **Teste e Outras Configurações:**  
  A pasta `backend/tests` pode conter testes que auxiliam na validação das funcionalidades da API. O arquivo `.gitignore` está configurado para ocultar dependências, logs e arquivos temporários.

- **Aplicação:**  
  O arquivo `backend/app.js` configura a aplicação Express, define os middlewares para parsing de JSON e formulários, e mapeia as rotas principais para cada recurso.

## Endpoints da API

A seguir, detalhamos os endpoints para cada recurso.

---

### 1. Motoristas

#### a) Cadastro de Motorista
- **Endpoint:** `POST /motoristas`
- **Descrição:** Cria um novo motorista. É obrigatório fornecer os campos `nome` e `cpf`. O campo `pontos` é opcional e, se não informado, assume o valor 0.
- **Requisição:**
  - **Cabeçalho:** `Content-Type: application/json`
  - **Corpo (JSON):**
    ```json
    {
      "nome": "João da Silva",
      "cpf": "12345678900",
      "pontos": 0
    }
    ```
  - **Validações:**  
    - O CPF deve estar no formato de 11 dígitos ou no formato `xxx.xxx.xxx-xx`.
    - Se o CPF não estiver no formato correto, a API retornará um erro 400 (Bad Request).
- **Resposta:**
  - **Status 201 Created:**  
    ```json
    {
      "mensagem": "Motorista cadastrado com sucesso",
      "id": 1,
      "motorista": {
        "nome": "João da Silva",
        "cpf": "12345678900",
        "pontos": 0
      }
    }
    ```
- **Possíveis Erros:**
  - **400 Bad Request:** Falta de campos obrigatórios ou CPF inválido.
  - **500 Internal Server Error:** Erro interno no cadastro.

#### b) Listagem de Motoristas
- **Endpoint:** `GET /motoristas`
- **Descrição:** Recupera a lista de todos os motoristas cadastrados.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    [
      {
        "id": 1,
        "nome": "João da Silva",
        "cpf": "12345678900",
        "pontos": 0
      },
      {
        "id": 2,
        "nome": "Maria Souza",
        "cpf": "98765432100",
        "pontos": 3
      }
    ]
    ```
- **Possíveis Erros:**
  - **500 Internal Server Error:** Caso ocorra erro ao acessar os dados.

#### c) Consulta de Motorista por ID
- **Endpoint:** `GET /motoristas/{id}`
- **Descrição:** Recupera as informações de um motorista específico identificado pelo seu ID.
- **Parâmetros de URL:**
  - `id`: Número identificador do motorista.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    {
      "id": 1,
      "nome": "João da Silva",
      "cpf": "12345678900",
      "pontos": 0
    }
    ```
  - **Status 404 Not Found:** Caso o motorista não seja encontrado.

#### d) Motoristas com Alta Pontuação
- **Endpoint:** `GET /motoristas/highscore`
- **Descrição:** Recupera motoristas que possuem alta pontuação. Este endpoint pode ser utilizado para identificar aqueles com melhores recordes de pontuação.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    [
      {
        "id": 3,
        "nome": "Carlos Pereira",
        "cpf": "11223344556",
        "pontos": 10
      }
    ]
    ```
- **Possíveis Erros:**
  - **500 Internal Server Error:** Caso ocorra erro na consulta.

---

### 2. Veículos

#### a) Cadastro de Veículo
- **Endpoint:** `POST /veiculos`
- **Descrição:** Cria um novo veículo no sistema, associando-o a um motorista por meio do campo `motorista_id`. Os campos obrigatórios são `placa`, `modelo`, `cor` e `motorista_id`.
- **Requisição:**
  - **Cabeçalho:** `Content-Type: application/json`
  - **Corpo (JSON):**
    ```json
    {
      "placa": "ABC-1234",
      "modelo": "Fiat Uno",
      "cor": "Vermelho",
      "motorista_id": 1
    }
    ```
- **Resposta:**
  - **Status 201 Created:**
    ```json
    {
      "mensagem": "veículo cadastrado com sucesso",
      "id": 10,
      "veiculo": {
        "placa": "ABC-1234",
        "modelo": "Fiat Uno",
        "cor": "Vermelho",
        "motorista_id": 1
      }
    }
    ```
- **Possíveis Erros:**
  - **400 Bad Request:** Falta de campos obrigatórios.
  - **500 Internal Server Error:** Problemas internos durante o cadastro.

#### b) Listagem de Veículos
- **Endpoint:** `GET /veiculos`
- **Descrição:** Retorna um array de todos os veículos cadastrados.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    [
      {
        "id": 10,
        "placa": "ABC-1234",
        "modelo": "Fiat Uno",
        "cor": "Vermelho",
        "motorista_id": 1
      },
      {
        "id": 11,
        "placa": "XYZ-9876",
        "modelo": "Chevrolet Onix",
        "cor": "Preto",
        "motorista_id": 2
      }
    ]
    ```
- **Possíveis Erros:**
  - **500 Internal Server Error:** Em caso de falha ao acessar os registros.

#### c) Consulta de Veículo por ID
- **Endpoint:** `GET /veiculos/{id}`
- **Descrição:** Obtém os detalhes de um veículo específico pelo seu ID.
- **Parâmetros de URL:**
  - `id`: Identificador do veículo.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    {
      "id": 10,
      "placa": "ABC-1234",
      "modelo": "Fiat Uno",
      "cor": "Vermelho",
      "motorista_id": 1
    }
    ```
  - **Status 404 Not Found:** Se não houver veículo com o ID solicitado.
- **Possíveis Erros:**
  - **500 Internal Server Error:** Se ocorrer um erro durante a consulta.

#### d) Deleção de Veículo por ID
- **Endpoint:** `DELETE /veiculos/{id}`
- **Descrição:** Remove um veículo do sistema baseado em seu ID.
- **Parâmetros de URL:**
  - `id`: Identificador do veículo.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    {
      "mensagem": "veículo deletado com sucesso"
    }
    ```
- **Possíveis Erros:**
  - **500 Internal Server Error:** Caso ocorra um erro durante a deleção.

---

### 3. Multas

#### a) Cadastro de Multa
- **Endpoint:** `POST /multas`
- **Descrição:** Registra uma nova multa para um motorista. São obrigatórios os campos `data`, `valor`, `descricao`, `pontos` e `motorista_id`.
- **Requisição:**
  - **Cabeçalho:** `Content-Type: application/json`
  - **Corpo (JSON):**
    ```json
    {
      "data": "2025-03-11",
      "valor": 250.00,
      "descricao": "Excesso de velocidade",
      "pontos": 5,
      "motorista_id": 1
    }
    ```
- **Resposta:**
  - **Status 201 Created:**
    ```json
    {
      "mensagem": "multa cadastrada com sucesso",
      "id": 15,
      "multa": {
        "data": "2025-03-11",
        "valor": 250.00,
        "descricao": "Excesso de velocidade",
        "pontos": 5,
        "motorista_id": 1
      }
    }
    ```
- **Possíveis Erros:**
  - **400 Bad Request:** Se faltar algum campo obrigatório.
  - **500 Internal Server Error:** Em caso de erro no cadastro.

#### b) Listagem de Multas
- **Endpoint:** `GET /multas`
- **Descrição:** Lista todas as multas registradas na API.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    [
      {
        "id": 15,
        "data": "2025-03-11",
        "valor": 250.00,
        "descricao": "Excesso de velocidade",
        "pontos": 5,
        "motorista_id": 1
      },
      {
        "id": 16,
        "data": "2025-03-10",
        "valor": 150.00,
        "descricao": "Parada irregular",
        "pontos": 3,
        "motorista_id": 2
      }
    ]
    ```
- **Possíveis Erros:**
  - **500 Internal Server Error:** Em caso de falha ao consultar as multas.

#### c) Consulta de Multa por ID
- **Endpoint:** `GET /multas/{id}`
- **Descrição:** Recupera os detalhes de uma multa específica informada pelo seu ID.
- **Parâmetros de URL:**
  - `id`: Identificador da multa.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    {
      "id": 15,
      "data": "2025-03-11",
      "valor": 250.00,
      "descricao": "Excesso de velocidade",
      "pontos": 5,
      "motorista_id": 1
    }
    ```
  - **Status 404 Not Found:** Se a multa não for encontrada.
- **Possíveis Erros:**
  - **500 Internal Server Error:** Caso ocorra um erro durante a consulta.

#### d) Consulta de Multas por Motorista
- **Endpoint:** `GET /multas/motorista/{motorista_id}`
- **Descrição:** Recupera todas as multas associadas a um motorista específico.
- **Parâmetros de URL:**
  - `motorista_id`: Identificador do motorista.
- **Resposta:**
  - **Status 200 OK:**
    ```json
    [
      {
        "id": 15,
        "data": "2025-03-11",
        "valor": 250.00,
        "descricao": "Excesso de velocidade",
        "pontos": 5,
        "motorista_id": 1
      }
    ]
    ```
- **Possíveis Erros:**
  - **500 Internal Server Error:** Se houver erro na consulta.
