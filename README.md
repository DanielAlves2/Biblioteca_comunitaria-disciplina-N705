# API de Integração Pokémon

Este projeto demonstra a integração entre múltiplas APIs externas para criar um serviço que combina e enriquece dados sobre Pokémon. O sistema integra a PokéAPI (para obter informações detalhadas sobre Pokémon) com a API Fun Translations (para traduzir descrições de Pokémon para estilos como Shakespeare e Yoda).

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
