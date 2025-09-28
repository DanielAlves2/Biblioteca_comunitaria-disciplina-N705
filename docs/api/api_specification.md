# Especificação da API - Biblioteca Comunitária

A API do sistema de gerenciamento de bibliotecas comunitárias será **RESTful**, com comunicação via **JSON**.  
Ela será consumida tanto pela aplicação **web (React)** quanto pela aplicação **mobile responsiva**.  

- **Base URL (exemplo dev):** `http://localhost:3000/api`
- **Autenticação:** JWT (JSON Web Token)
- **Formato de dados:** JSON
- **Códigos de resposta padrão:**
  - 200: Sucesso
  - 201: Criado com sucesso
  - 400: Requisição inválida
  - 401: Não autorizado
  - 404: Não encontrado
  - 500: Erro interno do servidor

---

## 2. Endpoints

### 2.1 Autenticação e Usuários
**POST /usuarios/register**  
- Cria um novo usuário.  
```json
{
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "telefone": "85999999999",
  "endereco": "Rua das Flores, 100",
  "email": "joao@email.com",
  "senha": "123456",
  "perfil": "leitor"
}
