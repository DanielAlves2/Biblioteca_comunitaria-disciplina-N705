# Arquitetura do Sistema - Biblioteca Comunitária

## 1. Visão Geral
O sistema de gerenciamento da biblioteca comunitária será baseado em uma arquitetura **cliente-servidor** de três camadas:

- **Frontend (React):** Interface do usuário, acessada via navegador.
- **Backend (Node.js + Express):** Camada de aplicação responsável pela lógica de negócio e APIs REST.
- **Banco de Dados (PostgreSQL):** Camada de persistência de dados.

---

## 2. Diagrama de Arquitetura

[Usuário] ⇄ [Frontend React] ⇄ [APIs REST em Node.js/Express] ⇄ [Banco PostgreSQL]

---

## 3. Tecnologias Selecionadas
- **Frontend:** React, Axios (para chamadas API), TailwindCSS (para UI).
- **Backend:** Node.js, Express.js, JWT (para autenticação), bcrypt (para hash de senhas).
- **Banco de Dados:** PostgreSQL, Sequelize/Prisma (ORM).
- **Ambiente:** Windows 10/11 (desenvolvimento), com possibilidade de migração para servidor Linux.

---

## 4. Componentes Principais
- **Gerenciamento de Usuários:** CRUD de leitores e administradores.
- **Gerenciamento de Livros:** CRUD de obras (título, autor, categoria, exemplares).
- **Controle de Empréstimos:** Registro de empréstimos e devoluções, controle de atrasos.
- **Eventos Culturais:** Cadastro e divulgação de eventos.
- **Relatórios:** Consultas sobre livros, usuários e empréstimos.

---

## 5. Modelo de Banco de Dados (ERD)

### Entidades e Relacionamentos
- **Usuário**
  - id_usuario (PK)
  - nome
  - cpf
  - telefone
  - endereco
  - email
  - senha (hash)
  - perfil (administrador ou leitor)

- **Livro**
  - id_livro (PK)
  - titulo
  - autor
  - categoria
  - ano_publicacao
  - exemplares_total
  - exemplares_disponiveis

- **Emprestimo**
  - id_emprestimo (PK)
  - id_usuario (FK → Usuario.id_usuario)
  - id_livro (FK → Livro.id_livro)
  - data_emprestimo
  - data_devolucao_prevista
  - data_devolucao_real
  - status (ativo, devolvido, atrasado)

- **Evento**
  - id_evento (PK)
  - titulo
  - descricao
  - data_evento
  - local

- **ParticipacaoEvento**
  - id_participacao (PK)
  - id_usuario (FK → Usuario.id_usuario)
  - id_evento (FK → Evento.id_evento)

---

## 6. Diagrama ER (Descrição)

```plaintext
┌────────────┐       ┌──────────────┐
│   Usuario  │1     n│  Emprestimo  │
│────────────│-------│──────────────│
│ id_usuario │       │ id_emprestimo│
│ nome       │       │ id_usuario FK│
│ cpf        │       │ id_livro FK  │
│ telefone   │       │ data_emp     │
│ endereco   │       │ data_prev    │
│ email      │       │ data_real    │
│ senha      │       │ status       │
│ perfil     │       └──────────────┘
└────────────┘
        │1
        │
        │n
┌────────────┐
│   Evento   │
│────────────│
│ id_evento  │
│ titulo     │
│ descricao  │
│ data_evento│
│ local      │
└────────────┘
        │1
        │
        │n
┌──────────────────┐
│ ParticipacaoEvento│
│──────────────────│
│ id_participacao   │
│ id_usuario (FK)   │
│ id_evento (FK)    │
└──────────────────┘

┌───────────┐
│   Livro   │
│───────────│
│ id_livro  │
│ titulo    │
│ autor     │
│ categoria │
│ ano_pub   │
│ exemplares│
└───────────┘
