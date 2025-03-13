
# Documentação da API - Desafio-4-sistemaDetran

# Como Executar o Programa

### Pré-requisitos
Antes de executar o programa, certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Git** (para clonar o repositório)

### Passos para Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/CaioSoandrd/Desafio-4-sistemaDetran.git
   cd Desafio-4-sistemaDetran

2. **Instale as dependências do backend:**
   Navegue até a pasta do backend e instale as dependências:
   ```bash
   cd backend
   npm install

3. **Inicie o servidor backend:**
   Execute o servidor backend na porta 5001:
   ```bash
   PORT=5001 node app.js
  O servidor estará rodando em http://localhost:5001.

4. **Instale as dependências do frontend:**
   Em um novo terminal, navegue até a pasta do frontend e instale as dependências::
   ```bash
   cd ../frontend
   npm install
 
5. **Inicie o servidor frontend:**
   Execute o servidor frontend na porta 3000:
   ```bash
   npm start

6. **Acesse a aplicação:**
  Abra o navegador e acesse http://localhost:3000 para interagir com o sistema.

## Testando a API
Após iniciar o servidor backend, você pode testar os endpoints da API diretamente no navegador ou usando ferramentas como o Postman ou Insomnia.

## Exemplo de Uso no Navegador

### Listar Motoristas
Acesse: [http://localhost:5001/api/motoristas](http://localhost:5001/api/motoristas)  
Você verá uma lista de todos os motoristas cadastrados.

### Consultar Motorista por CPF
Acesse: [http://localhost:5001/api/motoristas/12345678900](http://localhost:5001/api/motoristas/12345678900)  
Você verá os detalhes do motorista com CPF "12345678900".

### Listar Veículos
Acesse: [http://localhost:5001/api/veiculos](http://localhost:5001/api/veiculos)  
Você verá uma lista de todos os veículos cadastrados.

### Consultar Veículo por Placa
Acesse: [http://localhost:5001/api/veiculos/ABC1234](http://localhost:5001/api/veiculos/ABC1234)  
Você verá os detalhes do veículo com placa "ABC-1234".

### Listar Multas
Acesse: [http://localhost:5001/api/multas](http://localhost:5001/api/multas)  
Você verá uma lista de todas as multas registradas.

### Consultar Multa por ID
Acesse: [http://localhost:5001/api/multas/1](http://localhost:5001/api/multas/1)  
Você verá os detalhes da multa com ID 1.

### Motoristas com Alta Pontuação
Acesse: [http://localhost:5001/api/motoristas/pontuacao-alta](http://localhost:5001/api/motoristas/pontuacao-alta)  
Você verá a lista de motoristas com alta pontuação de multas.

## Dicas
- Use ferramentas como **Postman** ou **Insomnia** para testar os endpoints com métodos HTTP diferentes (`POST`, `PUT`, `DELETE`).
- Certifique-se de que o servidor backend está rodando corretamente na porta **5001** antes de testar os endpoints.

 
## Visão Geral

Esta API foi desenvolvida para resolver o desafio final do processo trainee da EngNet. Ela é construída em Node.js com Express e segue o padrão MVC (Model-View-Controller), possibilitando a separação clara entre a lógica de negócios, acesso a dados e a camada de apresentação (rotas).

A API gerencia três recursos principais:

- **Motoristas**
- **Veículos**
- **Multas**


Cada recurso dispõe de endpoints para criação, consulta, listagem e deleção (quando aplicável). Todas as operações do backend são realizadas de forma assíncrona utilizando callbacks. A integração com o frontend (localizado na pasta `frontend`) é feita consumindo esses endpoints.

---

## Estrutura do Projeto

- **backend/app.js:**  
  Configura o servidor Express, utiliza os middlewares para parsing (JSON e URL-encoded) e registra as rotas principais (motoristas, veículos e multas).

- **backend/controllers/:**  
  Contém os controllers que processam as requisições, realizam validações e chamam os modelos para manipulação dos dados.
  - Exemplo: `motoristaController.js`, `veiculoController.js`, `multaController.js`.
 
- **backend/db/:**  
  Contém as tabelas SQL e as consultas que podem ser feitas para testes, além dos diagramas conceitual(DER) e lógico (DLD).
  - Exemplo: `tabela.sql`, `popula.sql`.

- **backend/models/:**  
  Implementam a lógica de acesso ao banco de dados (CRUD) para cada recurso.
  - Exemplo: `motoristaModel.js`, `veiculoModel.js`, `multaModelo.js`.

- **backend/routes/:**  
  Define as rotas que mapeiam os endpoints para os respectivos controllers.
  - Exemplo: `motoristas.js`, `veiculos.js`, `multas.js`.

- **backend/tests/:**  
  Possui testes automatizados para validar as funcionalidades dos endpoints.

- **frontend/:**  
  Contém a aplicação frontend que consome os endpoints desta API.

---

## Operações da API


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

### 1. Motoristas

#### a) Cadastro de Motorista
- **Endpoint:** `POST /motoristas`

- **Funcionalidade:** Cria um novo motorista no sistema.

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

    - Os campos `nome` e `cpf` são obrigatórios.
    - O CPF deve estar no formato de 11 dígitos ou no formato `xxx.xxx.xxx-xx`. Caso contrário, a API retorna um erro 400.
    - Se o campo `pontos` não for informado, o valor padrão será 0.

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

- **Erros Possíveis:**
  - **400 Bad Request:** Falta de campos obrigatórios ou CPF em formato inválido.
  - **500 Internal Server Error:** Erro interno na criação do motorista.

#### b) Listagem de Motoristas
- **Endpoint:** `GET /motoristas`
- **Funcionalidade:** Retorna um array com todos os motoristas cadastrados.

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

- **Erros Possíveis:**
  - **500 Internal Server Error:** Problema ao recuperar a lista de motoristas.

#### c) Consulta de Motorista por ID
- **Endpoint:** `GET /motoristas/{id}`
- **Funcionalidade:** Recupera os detalhes de um motorista específico identificado pelo ID.
- **Parâmetros de URL:**  
  - `id`: Identificador numérico do motorista.

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

- **Erros Possíveis:**
  - **500 Internal Server Error:** Falha ao buscar o motorista.

#### d) Motoristas com Alta Pontuação
- **Endpoint:** `GET /motoristas/highscore`
- **Funcionalidade:** Retorna os motoristas que possuem alta pontuação de acordo com critérios definidos.


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

- **Erros Possíveis:**
  - **500 Internal Server Error:** Problema ao processar a consulta.

- **Possíveis Erros:**
  - **500 Internal Server Error:** Caso ocorra erro na consulta.


---

### 2. Veículos

#### a) Cadastro de Veículo
- **Endpoint:** `POST /veiculos`

- **Funcionalidade:** Registra um novo veículo no sistema, vinculado a um motorista.

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

- **Erros Possíveis:**
  - **400 Bad Request:** Campos obrigatórios não foram enviados.
  - **500 Internal Server Error:** Erro interno na criação do veículo.

#### b) Listagem de Veículos
- **Endpoint:** `GET /veiculos`
- **Funcionalidade:** Retorna um array com todos os veículos cadastrados.

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
  - **Status 404 Not Found:** Veículo não encontrado.
- **Erros Possíveis:**
  - **500 Internal Server Error:** Erro durante a consulta.

#### d) Deleção de Veículo por ID
- **Endpoint:** `DELETE /veiculos/{id}`
- **Funcionalidade:** Remove um veículo do sistema com base no seu ID.
- **Parâmetros de URL:**  

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

- **Erros Possíveis:**
  - **500 Internal Server Error:** Problema ao deletar o veículo.

#### e) Consulta de Veículos por Motorista
- **Endpoint:** `GET /veiculos/motorista/{motorista_id}`
- **Funcionalidade:** Retorna todos os veículos vinculados a um motorista específico.
- **Parâmetros de URL:**  
  - `motorista_id`: Identificador do motorista.
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
      }
    ]
    ```
- **Erros Possíveis:**
  - **500 Internal Server Error:** Erro ao consultar os veículos do motorista.

- **Possíveis Erros:**
  - **500 Internal Server Error:** Caso ocorra um erro durante a deleção.


---

### 3. Multas

#### a) Cadastro de Multa
- **Endpoint:** `POST /multas`

- **Funcionalidade:** Registra uma nova multa para um motorista.

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

- **Erros Possíveis:**
  - **400 Bad Request:** Campos obrigatórios faltando.
  - **500 Internal Server Error:** Erro interno no cadastro da multa.

#### b) Listagem de Multas
- **Endpoint:** `GET /multas`
- **Funcionalidade:** Retorna um array com todas as multas registradas.

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

- **Erros Possíveis:**
  - **500 Internal Server Error:** Falha ao recuperar multas.

#### c) Consulta de Multa por ID
- **Endpoint:** `GET /multas/{id}`
- **Funcionalidade:** Retorna os detalhes de uma multa específica, identificada pelo seu ID.
- **Parâmetros de URL:**  

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

- **Erros Possíveis:**
  - **500 Internal Server Error:** Erro ao buscar as multas do motorista.

---

## Como Usar a API

Esta seção detalha como consumir os endpoints do backend, seja para testes autônomos utilizando ferramentas como Postman ou para consumo direto pelo frontend.

### 1. Configuração Inicial e Execução

- **Inicie o Servidor:**  
  Navegue até a pasta do backend e execute o comando:
  ```bash
  PORT=5001 node backend/app.js
  ```
- **URL Base:**  
  Todas as requisições devem apontar para:
  ```
  http://localhost:5001
  ```

### 2. Exemplos de Consumo com Código

#### a) Uso com `fetch`

**Cadastro de Motorista:**
```javascript
fetch("http://localhost:5001/motoristas", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nome: "João da Silva",
    cpf: "12345678900",
    pontos: 0
  })
})
.then(response => response.json())
.then(data => console.log("Motorista cadastrado:", data))
.catch(error => console.error("Erro:", error));
```

**Listagem de Veículos:**
```javascript
fetch("http://localhost:5001/veiculos", {
  method: "GET"
})
.then(response => response.json())
.then(data => console.log("Veículos:", data))
.catch(error => console.error("Erro:", error));
```

**Cadastro de Multa:**
```javascript
fetch("http://localhost:5001/multas", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    data: "2025-03-11",
    valor: 250.00,
    descricao: "Excesso de velocidade",
    pontos: 5,
    motorista_id: 1
  })
})
.then(response => response.json())
.then(data => console.log("Multa cadastrada:", data))
.catch(error => console.error("Erro:", error));
```

#### b) Integração com o Frontend

- **Variáveis de Ambiente:**  
  No frontend, defina a URL base da API em uma variável de ambiente. Em um projeto React, por exemplo:
  ```bash
  REACT_APP_API_URL=http://localhost:5001
  ```
- **Centralize as Chamadas:**  
  Crie um módulo de serviços para encapsular as chamadas API (ex.: `src/services/api.js`).  
  Exemplo:
  ```javascript
  // src/services/api.js
  import axios from 'axios';

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  export const createMotorista = async (motorista) => {
    const response = await api.post('/motoristas', motorista);
    return response.data;
  };

  export const getMotoristas = async () => {
    const response = await api.get('/motoristas');
    return response.data;
  };

  // Outras funções para veículos e multas seguem o mesmo padrão

  export default api;
  ```
- **Uso em Componentes:**  
  Exemplo em um componente React para listar motoristas:
  ```javascript
  // src/components/Motoristas.js
  import React, { useEffect, useState } from 'react';
  import { getMotoristas } from '../services/api';

  const Motoristas = () => {
    const [motoristas, setMotoristas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getMotoristas();
          setMotoristas(data);
        } catch (error) {
          console.error("Erro ao buscar motoristas:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
      <div>
        <h1>Motoristas</h1>
        <ul>
          {motoristas.map(motorista => (
            <li key={motorista.id}>
              {motorista.nome} - CPF: {motorista.cpf}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Motoristas;
  ```

- **Possíveis Erros:**
  - **500 Internal Server Error:** Se houver erro na consulta.
