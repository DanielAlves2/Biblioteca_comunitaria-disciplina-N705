# Requisitos do Sistema - Biblioteca Comunitária

## 1. Introdução
O sistema de gerenciamento de bibliotecas comunitárias tem como objetivo facilitar o cadastro de livros, o controle de empréstimos, o registro de usuários e a divulgação de eventos culturais.  
A solução será voltada para uso em bibliotecas comunitárias localizadas em bairros de Fortaleza, como Mucuripe, Serviluz e Cais do Porto.

---

## 2. Público-Alvo e Stakeholders
- **Bibliotecários/Administradores:** responsáveis pelo cadastro de livros, controle de empréstimos e gestão de eventos.  
- **Usuários/Leitores:** pessoas da comunidade que realizarão empréstimos de livros e participação em eventos.  
- **Gestores da Biblioteca:** responsáveis por acompanhar relatórios e estatísticas de uso.  

---

## 3. Requisitos Funcionais

### 3.1 Cadastro e Gestão
- RF01: O sistema deve permitir o cadastro de livros com título, autor, categoria, ano de publicação, número de exemplares e status.  
- RF02: O sistema deve permitir o cadastro de usuários com nome, CPF, telefone e endereço.  
- RF03: O sistema deve permitir o registro de empréstimos e devoluções de livros.  
- RF04: O sistema deve emitir alertas de atraso de devolução.  
- RF05: O sistema deve permitir o cadastro e divulgação de eventos culturais (título, descrição, data, local).  

### 3.2 Consultas e Relatórios
- RF06: O sistema deve permitir a busca de livros por título, autor ou categoria.  
- RF07: O sistema deve exibir histórico de empréstimos por usuário.  
- RF08: O sistema deve gerar relatórios básicos de livros emprestados, atrasados e disponíveis.  

### 3.3 Acesso e Perfis
- RF09: O sistema deve possuir dois perfis de acesso: **Administrador** (bibliotecário) e **Usuário** (leitor).  
- RF10: O administrador deve ter acesso a todos os cadastros e relatórios.  
- RF11: O usuário deve ter acesso à consulta de livros, histórico próprio e inscrição em eventos.  

---

## 4. Requisitos Não-Funcionais

### 4.1 Plataforma e Tecnologias
- RNF01: O sistema será desenvolvido em **Node.js** para backend, **React** para frontend e **PostgreSQL** como banco de dados.  
- RNF02: O sistema será projetado para rodar em ambiente **Windows** com possibilidade de futura implantação em servidor web.  
- RNF03: A comunicação entre frontend e backend será feita via **APIs RESTful**.  

### 4.2 Usabilidade
- RNF04: A interface deve ser intuitiva, responsiva e acessível em dispositivos desktop e mobile.  
- RNF05: O sistema deve adotar padrões consistentes de design (cores, tipografia e ícones).  

### 4.3 Segurança
- RNF06: O sistema deve exigir autenticação para acesso a funcionalidades administrativas.  
- RNF07: As senhas de usuários devem ser armazenadas de forma criptografada.  

### 4.4 Desempenho
- RNF08: O sistema deve ser capaz de suportar pelo menos **100 usuários simultâneos** em consultas básicas.  
- RNF09: O tempo de resposta das consultas não deve exceder **2 segundos** em condições normais.  

---

## 5. Restrições
- O sistema será implementado inicialmente apenas em **português**.  
- O acesso offline não será contemplado nesta versão inicial.  

---

## 6. Critérios de Aceitação
- O sistema deve permitir que um administrador cadastre ao menos **50 livros** e **20 usuários** sem falhas.  
- O sistema deve permitir que usuários realizem **empréstimos e devoluções** de forma rastreável.  
- O sistema deve disponibilizar relatórios básicos em até **2 segundos** de tempo de resposta.  
