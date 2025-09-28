# 📚 Sistema de Gerenciamento para Bibliotecas Comunitárias

Plataforma para **catalogação de livros, controle de empréstimos e divulgação de eventos culturais** em bibliotecas comunitárias de bairros como **Mucuripe, Serviluz e Cais do Porto (Fortaleza/CE)**.  

---

## 🚀 Funcionalidades

- 👤 **Gerenciamento de Usuários**
  - Cadastro de leitores e administradores.
  - Perfis com níveis de acesso diferenciados (Administrador/Leitor).

- 📖 **Gerenciamento de Livros**
  - Cadastro de título, autor, categoria, ano de publicação e exemplares.
  - Consulta por título, autor ou categoria.

- 🔄 **Controle de Empréstimos**
  - Registro de empréstimos e devoluções.
  - Emissão de alertas de atraso.
  - Histórico de empréstimos por usuário.

- 🎭 **Eventos Culturais**
  - Cadastro e divulgação de eventos.
  - Registro de participação dos usuários.

- 📊 **Relatórios**
  - Livros emprestados, atrasados e disponíveis.
  - Relatórios básicos com tempo de resposta rápido.

---

## 🏗️ Arquitetura do Sistema

O sistema segue uma arquitetura **cliente-servidor em 3 camadas**:

- **Frontend:** React (UI responsiva com TailwindCSS).  
- **Backend:** Node.js + Express (APIs REST).  
- **Banco de Dados:** PostgreSQL (modelo relacional).  

Fluxo de comunicação:


---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TailwindCSS, Axios  
- **Backend:** Node.js, Express.js, JWT (autenticação), bcrypt (hash de senhas)  
- **Banco de Dados:** PostgreSQL, Sequelize/Prisma (ORM)  
- **Ambiente:** Windows 

---

## 🗂️ Modelo de Dados (Resumo)

### Entidades principais:
- **Usuário**: dados pessoais, perfil de acesso.  
- **Livro**: informações sobre as obras.  
- **Empréstimo**: controle de retirada e devolução.  
- **Evento**: eventos culturais da biblioteca.  
- **ParticipaçãoEvento**: relação 1:N entre usuários e eventos.  

### Diagrama ER:
```plaintext
Usuario (1)──(N) Emprestimo (N)──(1) Livro
Usuario (1)──(N) ParticipacaoEvento (N)──(1) Evento
