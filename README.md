
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
