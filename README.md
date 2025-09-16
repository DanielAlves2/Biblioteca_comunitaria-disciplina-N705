# balneabilidade-fortaleza-api

 Este projeto visa desenvolver um sistema multi plataforma que centraliza e apresenta de forma acessível os dados de balneabilidade das praias de Fortaleza. Utilizando os boletins semanais da SEMACE, a solução permitirá que cidadãos e turistas consultem, de maneira simples e rápida, se um trecho de praia está próprio ou impróprio para banho. A plataforma pretende disponibilizar essas informações de forma visual, interativa e responsiva, contribuindo para decisões mais seguras e para a promoção da saúde pública.

## Problema Abordado e Justificativa

 Atualmente, os boletins de balneabilidade da SEMACE (Superintendência Estadual do Meio Ambiente) são divulgados semanalmente, mas o acesso a essas informações pode ser disperso, dificultando para moradores e turistas verificarem rapidamente se um trecho de praia em Fortaleza é seguro para banho. O problema é a falta de uma plataforma centralizada e fácil de usar que apresente esses dados de forma clara, o que pode impactar a saúde e o bem-estar das pessoas.
 Este projeto busca resolver esse problema, gerando um impacto social positivo alinhado ao Objetivo de Desenvolvimento Sustentável (ODS) 11: Cidades e Comunidades Sustentáveis. Ao fornecer informações acessíveis sobre a qualidade da água das praias, o sistema contribui para tornar as áreas urbanas mais seguras e sustentáveis, promovendo o bem-estar da população.

## Objetivos do Sistema

 O sistema foi concebido com os seguintes objetivos principais:
   - **Centralização de Informações: Coletar os boletins de balneabilidade, extrair seus dados e armazená-los de forma organizada.
   - **Acessibilidade e Transparência: Oferecer uma interface clara e responsiva, acessível em dispositivos móveis e desktops.
   - **Promoção de Saúde e Bem-Estar: Auxiliar cidadãos na tomada de decisão sobre o uso seguro das praias, reduzindo riscos de doenças   causadas por contato com águas contaminadas.
   - **Visualização Intuitiva: Permitir buscas por praia, zona ou trecho, e exibir resultados com indicadores visuais (cores, status).

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
   - Estratégia de testes (unitários, integração, funcionais e de carga).
 Fora de escopo nesta etapa: implementação de código, hospedagem em produção e integração contínua. Esses itens serão tratados na disciplina N708.

## Visão Geral da Arquitetura

 A arquitetura proposta segue o modelo em camadas, que possibilita modularizar o sistema e realizar mudanças mais rapidamente. Essa estrutura garante a consistência e a confiabilidade do sistema e tem impacto direto nos atributos de qualidade, como a confiabilidade e o desempenho.
  1. Camada de Apresentação (Frontend):
   - Responsável pela interação com o usuário, por meio de uma aplicação web responsiva e uma aplicação móvel nativa ou híbrida.
   - Projetada com princípios de User-Centered Design (UCD) para garantir uma boa experiência de usuário, com foco em uma interface limpa, navegação intuitiva e minimização de conteúdo.
 2. Camada de Lógica de Negócio (Backend):
   - Uma API RESTful que expõe os dados de balneabilidade, aplica regras de negócio e se comunica com a camada de persistência.
   - Implementa o acesso à camada de persistência e a lógica de processamento dos dados coletados.
 3. Camada de Persistência (Banco de Dados):
   - Banco de dados relacional para armazenar de forma estruturada os dados históricos de balneabilidade.
   - Utilização de um ORM (Mapeamento Objeto-Relacional) para abstrair operações de CRUD, reduzir código repetitivo e garantir integridade transacional.
 4. Serviço de Coleta de Dados:
   - Componente automatizado que acessa os boletins da SEMACE, extrai os dados relevantes e atualiza o banco de dados.



## Tecnologias Utilizadas

  - Node.js
  - react
  - Postgre SQL
  - metodo get(gerando arquivo json)
  - Ferramentas de Design: Figma para prototipação, Draw.io para diagramas.
  - Documentação de API: Swagger/OpenAPI.
  - Jest (para testes)

## Cronograma para Etapa 2

 Na segunda etapa, será realizada a implementação da solução proposta, seguindo uma abordagem incremental e priorizando a qualidade por meio da aplicação da pirâmide de testes.
   - Semanas 1 e 2 – Configuração do ambiente e serviço de coleta: Nesta fase, será configurado o repositório e os ambientes de desenvolvimento. Será implementado o serviço automatizado de coleta dos boletins da SEMACE, responsável por extrair e armazenar os dados de balneabilidade no banco de dados. Serão aplicados testes unitários para validar as funções de parsing, tratamento de dados e inserção no banco, garantindo precisão desde o início.
   - Semanas 3 e 4 – Desenvolvimento da API RESTful: Serão criados os endpoints para consulta dos dados, filtros por praia ou zona e histórico das últimas semanas. Nessa etapa, serão executados testes de integração para validar a comunicação entre as diferentes unidades do código.
   - Semanas 5 e 6 – Desenvolvimento do Frontend Web: Serão implementadas as interfaces de listagem, filtros, histórico e indicadores visuais de balneabilidade. Também serão realizados testes de UI automatizados para garantir que as principais jornadas do usuário funcionem corretamente.
   - Semana 7 – Integração e versão mobile: Será feita a integração entre frontend e backend, garantindo que os dados estejam fluindo corretamente. Caso viável, será iniciada a versão mobile utilizando os mesmos serviços do backend.
   - Semana 8 – Testes de carga e ajustes finais: Serão realizados testes de carga para avaliar a escalabilidade do sistema sob múltiplas requisições simultâneas. Por fim, serão feitos ajustes finais, a documentação será revisada e será preparado o material para entrega.
A aplicação da Pirâmide de Testes garantirá maior qualidade no produto final, com maior número de testes de unidade (baixo custo e alta cobertura), seguido de testes de serviço (integração) e, no topo, testes de UI e de aceitação para validação em ambiente próximo ao real.

## Integrantes da Equipe e Seus Papéis

Ayala Rodrigues Freire: 2323803 - Analista de Requisitos/UX Designer
Daniel Alves Fabricio: 2326208 - Responsável pela documentação da API
Nome do Integrante 3: Matrícula - Responsável pela prototipação
Nome do Integrante 4: Matrícula - responsavel pelo desenvolvimento backend
Nome do Integrante 5: Matrícula - responsável pelo texte


## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
