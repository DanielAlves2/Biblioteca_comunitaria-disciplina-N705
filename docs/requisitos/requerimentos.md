# Documento de Requisitos - Sistema de Balneabilidade das Praias de Fortaleza

Este documento detalha os requisitos para o sistema de consulta de balneabilidade das praias de Fortaleza. Ele serve como guia para as equipes de design, desenvolvimento e testes, garantindo que a solução atenda às necessidades dos usuários e aos objetivos do projeto.

## Requisitos Funcionais (RF)
Os Requisitos Funcionais (RF) descrevem o que o sistema "Deverá Fazer". Eles formam a base da nossa pirâmide, detalhando os "Requisitos de Sistema" e correspondem diretamente à categoria

## Functionality (Funcionalidade) do modelo FURPS+.

 - RF001 - Listagem de Praias: O sistema deve exibir uma lista de todas as praias de Fortaleza que são monitoradas pela SEMACE.
 - RF002 - Detalhamento de Praia: Ao selecionar uma praia, o sistema deve exibir todos os trechos monitorados correspondentes a ela, com seus respectivos status de balneabilidade.
 - RF003 - Busca: O sistema deve permitir que o usuário insira o nome de uma praia em um campo de busca para filtrar a lista.
 - RF004 - Indicador Visual de Status: Cada trecho de praia listado deve apresentar um indicador visual claro (ex: um selo colorido) que represente o status "Próprio" ou "Impróprio".
 - RF005 - Exibição de Data do Boletim: A interface principal deve exibir a data de publicação do último boletim que alimenta os dados atuais.
 - RF006 - Consulta de Histórico: O sistema deve permitir a visualização dos últimos 4 (quatro) resultados de balneabilidade para um trecho de praia selecionado.

## Requisitos Não-Funcionais (RNF)

Os Requisitos Não-Funcionais (RNF) define de que maneira o sistema deve operar, focando nos atributos de qualidade. Para uma especificação completa e organizada, vamos utilizar a classificação FURPS+.

## U - Usability (Usabilidade)

 - RNF001: A interface deve ser responsiva, adaptando-se a telas de desktops, tablets e smartphones.
 - RNF002: O sistema deve ser intuitivo, permitindo que um usuário realize uma consulta em no máximo 3 cliques após acessar a página inicial.
 - RNF003: O sistema deve seguir padrões de acessibilidade para garantir o uso por pessoas com deficiência visual (ex: contraste de cores e suporte a leitores de tela).

## R - Reliability (Confiabilidade)

 - RNF004: O sistema deve ter uma disponibilidade de no mínimo 99.5%.
 - RNF005: Em caso de falha no serviço automatizado de coleta de dados, o sistema deve manter as informações do último boletim válido e informar ao usuário a data correspondente, garantindo a integridade dos dados.

## P - Performance (Desempenho)

 - RNF006: O tempo de resposta para a listagem inicial das praias não deve exceder 10 segundos.
 - RNF007: O sistema deve suportar 50 usuários realizando consultas simultâneas sem degradação perceptível no tempo de resposta.

## S - Supportability (Suportabilidade)

 - RNF008: A arquitetura do sistema deve ser modular, permitindo que as equipes de frontend e backend trabalhem de forma independente.
 - RNF009: O processo de atualização dos dados de balneabilidade deve ser automatizado, minimizando a necessidade de intervenção manual.
 - RNF010: O sistema deve ser compatível com os navegadores Google Chrome, Mozilla Firefox e Microsoft Edge em suas duas últimas versões estáveis.

## + (Constraints - Restrições)

 ## Requisitos de Interface:
 - RNF011: A comunicação entre o frontend e o backend deve ocorrer por meio de uma API RESTful, utilizando o formato JSON.
 ## Requisitos Legais:
 - RNF012: O sistema não deve coletar ou armazenar dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD).

 ## Requisitos de Padrões:
 - RNF013: A documentação da API deve seguir a especificação OpenAPI (Swagger).

## Regras de Negócio

Estas são as diretrizes de alto nível que formam o topo da nossa "Pirâmide dos Requisitos", representando as convenções do negócio. Elas ditam as políticas e restrições fundamentais do sistema.
 - RN01: A fonte primária de dados de balneabilidade é o boletim semanal publicado pela Superintendência Estadual do Meio Ambiente (SEMACE).
 - RN02: O sistema deve ser atualizado com os dados do novo boletim em até 24 horas após sua publicação oficial.
 - RN03: Um trecho de praia é classificado em duas categorias principais: "Próprio" ou "Impróprio" para banho.
 - RN04: O histórico de balneabilidade de cada trecho deve ser armazenado por, no mínimo, 24 meses.
 - RN05: Todas as informações apresentadas ao usuário devem ser de acesso público, sem necessidade de autenticação.

## Histórias de Usuário

As histórias de usuário detalham as necessidades dos stakeholders primários, correspondendo ao nível de "Requisitos de Usuários" da pirâmide.
 - HU01: Como um Cidadão/Turista, eu quero ver uma lista de todas as praias monitoradas em Fortaleza, para que eu possa ter uma visão geral das opções disponíveis.
 - HU02: Como um Cidadão/Turista, eu quero buscar por uma praia específica pelo nome, para que eu possa encontrar rapidamente a informação que desejo.
 - HU03: Como um Cidadão/Turista, eu quero ver o status de balneabilidade (Próprio/Impróprio) de cada trecho da praia, para que eu possa saber se o local é seguro para nadar.
 - HU04: Como um Cidadão/Turista, eu quero ver um indicador visual claro (ex: cores verde/vermelho) para cada status, para que eu possa entender a condição da praia de forma imediata.
 - HU05: Como um Cidadão/Turista, eu quero acessar o sistema tanto pelo meu celular quanto pelo computador, para que eu possa consultar a informação de qualquer lugar.
 - HU06: Como um Cidadão/Turista, eu quero ver a data do boletim consultado, para que eu possa saber se a informação é recente e confiável.
 - HU07: Como um Cidadão/Turista, eu quero ver o histórico recente de uma praia, para que eu possa observar se a condição dela tem sido consistente.

## Perfis de Usuários
 ## Cidadão/Turista:
 - Descrição: Usuário final que deseja consultar a condição de uma praia para atividades de lazer. Busca informação rápida, visual e confiável para decidir se vai à praia e a qual trecho ir.
 - Objetivo: Obter informações de balneabilidade de forma simples e imediata, seja pelo celular ou computador.
