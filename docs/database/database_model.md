
## Diagrama ER

# Modelo de Dados - Biblioteca Comunitária

## 1. Visão Geral
O modelo de dados foi desenvolvido para atender às principais funcionalidades do sistema de gerenciamento da biblioteca comunitária:  
- Cadastro de usuários  
- Cadastro de livros  
- Registro de empréstimos e devoluções  
- Cadastro de eventos culturais  
- Registro de participação em eventos  

O banco de dados será implementado em **PostgreSQL**.

---

## 2. Diagrama ER (Resumo)
- **Usuário** (guarda dados de leitores e administradores)  
- **Livro** (informações sobre os exemplares disponíveis)  
- **Empréstimo** (controle de retirada e devolução de livros)  
- **Evento** (eventos culturais promovidos pela biblioteca)  
- **ParticipaçãoEvento** (relacionamento N:N entre usuários e eventos)  

---

## 3. Modelo Lógico (DDL - PostgreSQL)

```sql
-- Criação do esquema
CREATE SCHEMA biblioteca;

-- =======================
-- Tabela: Usuario
-- =======================
CREATE TABLE biblioteca.usuario (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco TEXT,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    perfil VARCHAR(20) CHECK (perfil IN ('administrador','leitor')) NOT NULL
);

-- =======================
-- Tabela: Livro
-- =======================
CREATE TABLE biblioteca.livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(150) NOT NULL,
    categoria VARCHAR(100),
    ano_publicacao INT CHECK (ano_publicacao > 0),
    exemplares_total INT NOT NULL CHECK (exemplares_total >= 0),
    exemplares_disponiveis INT NOT NULL CHECK (exemplares_disponiveis >= 0)
);

-- =======================
-- Tabela: Emprestimo
-- =======================
CREATE TABLE biblioteca.emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES biblioteca.usuario(id_usuario) ON DELETE CASCADE,
    id_livro INT NOT NULL REFERENCES biblioteca.livro(id_livro) ON DELETE CASCADE,
    data_emprestimo DATE NOT NULL DEFAULT CURRENT_DATE,
    data_devolucao_prevista DATE NOT NULL,
    data_devolucao_real DATE,
    status VARCHAR(20) CHECK (status IN ('ativo','devolvido','atrasado')) NOT NULL
);

-- =======================
-- Tabela: Evento
-- =======================
CREATE TABLE biblioteca.evento (
    id_evento SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    data_evento DATE NOT NULL,
    local VARCHAR(200) NOT NULL
);

-- =======================
-- Tabela: ParticipacaoEvento
-- =======================
CREATE TABLE biblioteca.participacao_evento (
    id_participacao SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES biblioteca.usuario(id_usuario) ON DELETE CASCADE,
    id_evento INT NOT NULL REFERENCES biblioteca.evento(id_evento) ON DELETE CASCADE,
    UNIQUE (id_usuario, id_evento)
);




 
