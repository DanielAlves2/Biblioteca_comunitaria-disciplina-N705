# Documento de Requisitos - Sistema de Balneabilidade das Praias de Fortaleza

Este documento detalha os requisitos para o sistema de consulta de balneabilidade das praias de Fortaleza. Ele serve como guia para as equipes de design, desenvolvimento e testes, garantindo que a solução atenda às necessidades dos usuários e aos objetivos do projeto.

## Requisitos Funcionais (RF)
Os Requisitos Funcionais (RF) descrevem o que o sistema "Deverá Fazer". Eles formam a base da nossa pirâmide, detalhando os "Requisitos de Sistema" e correspondem diretamente à categoria

## Functionality (Funcionalidade) do modelo FURPS+.

 - RF01 – Coleta de Dados da SEMACE
O sistema deve obter os boletins semanais de balneabilidade publicados pela SEMACE em formato PDF.

- RF02 – Extração de Dados
O sistema deve processar automaticamente os boletins PDF e extrair informações sobre as praias (nome, trecho, status de balneabilidade: próprio/impróprio).

- RF03 – Armazenamento em Banco de Dados
O sistema deve armazenar as informações extraídas em um banco de dados PostgreSQL de forma estruturada.

- RF04 – Consulta por Praia
O usuário deve poder consultar a situação de uma praia específica.

- RF05 – Consulta por Zona/Região
O sistema deve permitir que o usuário filtre as praias por zona (exemplo: Leste, Oeste, Centro).

- RF06 – Visualização de Status
O sistema deve exibir de forma clara se a praia está própria ou imprópria para banho, utilizando ícones ou cores (verde/vermelho).

- RF07 – Histórico de Balneabilidade
O sistema deve permitir que o usuário consulte o histórico de balneabilidade de uma praia.

- RF08 – Interface Responsiva
O sistema deve ser acessível em dispositivos móveis, tablets e desktops, ajustando automaticamente o layout.

- RF09 – Pesquisa Rápida
O sistema deve oferecer um campo de pesquisa por nome da praia.

- RF10 – API RESTful
O sistema deve disponibilizar uma API para fornecer os dados de balneabilidade em formato JSON.

## Requisitos Não-Funcionais (RNF)

Os Requisitos Não-Funcionais (RNF) define de que maneira o sistema deve operar, focando nos atributos de qualidade. Para uma especificação completa e organizada, vamos utilizar a classificação FURPS+.

- RNF01 – Usabilidade
O sistema deve ter uma interface simples, intuitiva e amigável para o usuário final.

- RNF02 – Desempenho
O sistema deve carregar as consultas de praias em menos de 3 segundos em condições normais.

- RNF03 – Confiabilidade
O sistema deve atualizar os dados semanalmente de acordo com os boletins oficiais da SEMACE.

- RNF04 – Manutenibilidade
O código deve ser modularizado e organizado em pastas (frontend, backend, database) para facilitar manutenção futura.

- RNF06 – Segurança
A API deve estar protegida contra acessos indevidos e seguir boas práticas de autenticação (quando houver área restrita).

- RNF07 – Portabilidade
O sistema deve rodar em navegadores modernos (Chrome, Firefox, Edge, Safari) e em dispositivos Android/iOS.

- RNF08 – Disponibilidade
O sistema deve estar disponível 24/7, salvo períodos programados de manutenção.

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
