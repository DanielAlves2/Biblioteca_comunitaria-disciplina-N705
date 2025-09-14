# balneabilidade-fortaleza-api

Este projeto visa desenvolver um sistema multi plataforma que centraliza e apresenta de forma acessível os dados de balneabilidade das praias de Fortaleza. Utilizando os boletins semanais da SEMACE, a solução permitirá que cidadãos e turistas consultem, de maneira simples e rápida, se um trecho de praia está próprio ou impróprio para banho. A plataforma pretende disponibilizar essas informações de forma visual, interativa e responsiva, contribuindo para decisões mais seguras e para a promoção da saúde pública.

## Problema Abordado e Justificativa

Atualmente, os boletins de balneabilidade da SEMACE (Superintendência Estadual do Meio Ambiente) são divulgados semanalmente, mas o acesso a essas informações pode ser disperso, dificultando para moradores e turistas verificarem rapidamente se um trecho de praia em Fortaleza é seguro para banho. O problema é a falta de uma plataforma centralizada e fácil de usar que apresente esses dados de forma clara, o que pode impactar a saúde e o bem-estar das pessoas.
Este projeto busca resolver esse problema, gerando um impacto social positivo alinhado ao Objetivo de Desenvolvimento Sustentável (ODS) 11: Cidades e Comunidades Sustentáveis. Ao fornecer informações acessíveis sobre a qualidade da água das praias, o sistema contribui para tornar as áreas urbanas mais seguras e sustentáveis, promovendo o bem-estar da população.

## Objetivos do Sistema

O sistema foi concebido com os seguintes objetivos principais:
Centralização de Informações: Coletar os boletins de balneabilidade, extrair seus dados e armazená-los de forma organizada.
Acessibilidade e Transparência: Oferecer uma interface clara e responsiva, acessível em dispositivos móveis e desktops.
Promoção de Saúde e Bem-Estar: Auxiliar cidadãos na tomada de decisão sobre o uso seguro das praias, reduzindo riscos de doenças causadas por contato com águas contaminadas.
Visualização Intuitiva: Permitir buscas por praia, zona ou trecho, e exibir resultados com indicadores visuais (cores, status).

## Escopo do Projeto

O projeto abrange o planejamento completo de um sistema multiplataforma para centralizar e disponibilizar informações de balneabilidade das praias de Fortaleza. Nesta primeira etapa (N705), o foco está na documentação técnica e no desenho da solução, sem implementação de código.
O escopo inclui:
* Levantamento e Organização das Funcionalidades:
  - Consulta de balneabilidade por praia, zona ou trecho.
  - Classificação visual das praias como próprias ou impróprias para banho.
* Definição da Arquitetura:
  - Backend baseado em API RESTful para servir os dados de balneabilidade.
  - Frontend web responsivo e design de interface mobile para acessibilidade.
  - Banco de dados relacional para persistência dos dados.
  - Serviço de coleta automatizada dos boletins da SEMACE.
* Modelagem de Dados e APIs:
  - Criação de diagrama ER ou de classes para o modelo de dados.
  - Especificação dos endpoints da API, parâmetros de requisição e formatos de resposta.
* Prototipação de Interfaces:
  - Desenvolvimento de protótipos de interface para web e mobile.
  - Validação de fluxos de usuário com base no Design Centrado no Usuário (UCD).
* Planejamento da Implementação (Etapa 2 – N708):
  - Cronograma detalhado para o desenvolvimento do backend, frontend, integração e testes.
  -Estratégia de testes (unitários, integração, funcionais e de carga).
Fora de escopo nesta etapa: implementação de código, hospedagem em produção e integração contínua. Esses itens serão tratados na disciplina N708.

## 


## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Axios
- Jest (para testes)

## Estrutura do Projeto

```
/
├── README.md              # Documentação principal
├── docs/                  # Documentação adicional
│   └── architecture.md    # Descrição da arquitetura
├── src/                   # Código-fonte do projeto
├── tests/                 # Testes unitários
└── postman/               # Coleção Postman exportada
    └── collection.json    # Arquivo da coleção
```

## Pré-requisitos

- Node.js (v14 ou superior)
- Yarn

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```
   yarn install
   ```

3. Configure as variáveis de ambiente:
   ```
   cp .env.example .env
   ```
   E edite o arquivo `.env` conforme necessário.

## Execução

Para iniciar o servidor em modo de desenvolvimento:

```
yarn dev
```

Para compilar e executar em produção:

```
yarn build
yarn start
```

## Endpoints da API

### Informações de Pokémon

- `GET /api/pokemon/:nameOrId` - Obtém informações detalhadas sobre um Pokémon específico
- `GET /api/pokemon/random/pokemon` - Obtém um Pokémon aleatório

### Traduções

- `GET /api/pokemon/translate/:nameOrId` - Obtém um Pokémon com descrição traduzida
  - Query params: `translator` (shakespeare ou yoda, padrão: shakespeare)
- `GET /api/pokemon/random/translate` - Obtém um Pokémon aleatório com descrição traduzida
  - Query params: `translator` (shakespeare ou yoda, padrão: shakespeare)

### Pokémon Lendários

- `GET /api/pokemon/legendary/pokemon` - Obtém Pokémon lendários com traduções no estilo Yoda
  - Query params: `limit` (número de Pokémon, padrão: 5)

### Comparações

- `GET /api/pokemon/compare/type/:type` - Compara Pokémon de um tipo específico
  - Query params: `limit` (número de Pokémon, padrão: 5)

## Exemplos de Uso

### Obter informações sobre o Pikachu

```
GET /api/pokemon/pikachu
```

### Obter descrição de Charizard traduzida para o estilo Shakespeare

```
GET /api/pokemon/translate/charizard?translator=shakespeare
```

### Obter 3 Pokémon lendários com descrições traduzidas para o estilo Yoda

```
GET /api/pokemon/legendary/pokemon?limit=3
```

### Comparar 10 Pokémon do tipo fogo

```
GET /api/pokemon/compare/type/fire?limit=10
```

## Testes

Para executar os testes:

```
yarn test
```

## Documentação Adicional

Para mais detalhes sobre a arquitetura do sistema, consulte [docs/architecture.md](docs/architecture.md).

## Limitações Conhecidas

- A API Fun Translations tem um limite de requisições para usuários gratuitos (5 por hora).
- Algumas traduções podem não estar disponíveis devido a esse limite.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
