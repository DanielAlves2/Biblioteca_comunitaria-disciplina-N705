# Arquitetura do Sistema de balneabilidade de fortaleza

A arquitetura proposta para a API de Balneabilidade é baseada em microsserviços e camadas que garantem escalabilidade, segurança, interoperabilidade e facilidade de manutenção. Ela será composta pelos seguintes componentes.

## Descrição da Arquitetura
A Arquitetura de Software (AS) adotada para este projeto é a principal portadora dos atributos de qualidade do sistema, como desempenho, capacidade de modificação e confiabilidade. Para atender aos requisitos funcionais e não-funcionais definidos, a solução será estruturada utilizando o estilo arquitetural em Camadas.
Este estilo foi escolhido por permitir uma clara separação das responsabilidades do sistema, modularizando-o em níveis de abstração distintos. A estrutura resultante facilita a manutenção, a evolução e a reutilização de componentes, pois as alterações em uma camada (como a interface do usuário) têm impacto mínimo sobre as outras (como a lógica de negócio ou o acesso a dados). Essa abordagem nos ajuda a alcançar o princípio de minimização da complexidade, fundamental na construção de software.
A arquitetura organiza o sistema em três camadas lógicas principais: Apresentação (Frontend), Lógica de Negócio (Backend) e Persistência (Banco de Dados), além de um serviço de suporte para a coleta de dados.

## Componentes do Sistema
Seguindo a abordagem da Engenharia de Software Baseada em Componentes (ESBC), o sistema é decomposto em segmentos funcionais com interfaces claramente definidas. A comunicação entre eles se dará por meio de passagem de mensagens, via requisições HTTP à API.

## 1. Componente de Apresentação (Frontend):
 - Responsabilidade: É a camada responsável pela interação direta com o usuário. Apresenta os dados de balneabilidade e captura as entradas do usuário (buscas, cliques).
 - Artefatos: Aplicação Web Responsiva (acessível em desktops e dispositivos móveis).
 - Tecnologias: a definir

## 2. Componente de Lógica de Negócio (Backend - API RESTful):
 - Responsabilidade: Orquestra as regras de negócio do sistema. Processa as requisições vindas do frontend, aplica a lógica necessária (como formatar dados, filtrar praias) e se comunica com a camada de persistência para buscar ou gravar informações. Serve como a interface de comunicação entre o cliente e os dados.
 - Artefatos: API (Interface de Programação de Aplicação) com endpoints para consulta de praias, trechos e histórico.

## 3. Componente de Persistência (Banco de Dados):
 - Responsabilidade: Armazena e gerencia todos os dados da aplicação de forma duradoura e organizada. Isso inclui as informações sobre as praias, os trechos monitorados e o histórico dos boletins de balneabilidade.
 - Artefatos: Banco de Dados Relacional.

## 4. Componente de Coleta de Dados (Serviço Automatizado):
 - Responsabilidade: Atua de forma independente para alimentar o sistema. É responsável por acessar periodicamente o site da SEMACE, extrair os dados dos boletins semanais e inseri-los de forma estruturada no Componente de Persistência.
 - Artefatos: Script de automação (Web Scraping).

## Padrões Arquiteturais Utilizados
Para atingir os objetivos de eficiência, qualidade e custo, a construção do software se apoiará em padrões consolidados.
 - Estilo em Camadas (Layered Architecture): É o padrão principal que organiza todo o sistema. Separa a interface do usuário, a lógica de negócio e o acesso aos dados, promovendo a coesão e o baixo acoplamento entre as partes do software.
 - API RESTful (Representational State Transfer): Utilizado como padrão para a comunicação entre o componente de apresentação (Frontend) e o de lógica de negócio (Backend). Define uma interface uniforme e sem estado (stateless) para a troca de mensagens, o que é ideal para sistemas multiplataforma.
 - Mapeamento Objeto-Relacional (MOR / ORM): Será utilizado na camada de backend para atuar como uma camada de abstração para os dados persistentes. Um ORM mapeia os objetos do domínio da aplicação para as tabelas do banco de dados relacional, simplificando as operações de CRUD (Create, Read, Update, Delete) e garantindo a consistência dos dados.
## Diagrama de Arquitetura
O diagrama a seguir representa a estrutura do sistema e o fluxo de interação entre os componentes. Ele ilustra a separação em camadas e como os dados fluem desde a fonte original (SEMACE) até o usuário final.
 
 ![diagrama de arquiterura](<Diagrama de Arquitetura.png>)

## Fluxo de Dados:
 1. O Serviço de Coleta acessa o Site da SEMACE, extrai os dados do boletim e os insere no Banco de Dados.
2. O Usuário Final interage com o Frontend.
3. O Frontend envia uma requisição (ex: "listar todas as praias") para o Backend API.
4. O Backend API processa a requisição, busca os dados necessários no 5. Banco de Dados e os retorna para o Frontend.
O Frontend recebe os dados e os exibe de forma amigável para o Usuário Final.

## Decisões Técnicas e Justificativas
Cada decisão arquitetural foi tomada visando atender aos requisitos do projeto e garantir os atributos de qualidade desejados.
 - Decisão 1: Adoção do Estilo em Camadas.
Justificativa: Esta escolha suporta diretamente o requisito não-funcional de suportabilidade (RNF008), pois permite o desenvolvimento paralelo e a manutenção independente do frontend e backend. A modularidade inerente a este estilo também facilita a antecipação de mudanças, permitindo, por exemplo, a criação de uma nova interface (um aplicativo nativo) no futuro, sem alterar a lógica de negócio existente.
 - Decisão 2: Comunicação via API RESTful.
    - Justificativa: Desacoplar o frontend do backend é crucial para um projeto multiplataforma. Uma API RESTful (RNF011) garante uma interface de comunicação padronizada, permitindo que diferentes clientes (navegador web, aplicativo móvel) consumam os mesmos dados da mesma forma. Isso está alinhado com a
    Engenharia de Componentes, que preza por interfaces bem definidas entre as partes do sistema.
 -  Decisão 3: Banco de Dados Relacional.
   - Justificativa: Os dados de balneabilidade são altamente estruturados (Praia -> Trecho -> Boletim Semanal com Status e Data). Um banco de dados relacional (PostgreSQL) proporciona uma maior facilidade de inserção e recuperação desses dados e garante uma grande
   consistência de dados, o que é fundamental para a confiabilidade  (RNF004) da informação apresentada ao usuário.
 - Decisão 4: Criação de um Serviço de Coleta Automatizado.
  - Justificativa: Para atender ao requisito de confiabilidade e manter o sistema atualizado (RN02), um processo manual de atualização seria propenso a erros e atrasos. Um componente automatizado garante que os dados sejam coletados de forma consistente e pontual, melhorando a integridade e a confiança no sistema como um todo.


















