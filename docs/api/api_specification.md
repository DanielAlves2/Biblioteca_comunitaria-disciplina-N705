
# Edpoints previstos


## Usuários

 - GET / usuarios : Lista todos os usuários
 - GET / usuarios/{id} : Detalha um usuário específico
 - POST / usuarios : Cadastra novo usuário
 - PUT / usuarios/{id} : Atualiza usuário
 - DELETE / usuarios/{id} : Remove usuário

## Praias

 - GET / praias → Lista todas as praias monitoradas
 - GET / praias/{id} → Detalha uma praia específica
 - PUT / praias/{id} → Atualiza praia
 - DELETE / praias/{id} → Remove praia

 ## Balneabilidade

 - GET / balneabilidade → Lista todas as análises de balneabilidade
 - GET / balneabilidade/{id} → Detalha uma análise específica
 - GET / praias/{id}/balneabilidade → Lista análises de uma praia
 - PUT / balneabilidade/{id} → Atualiza análise
 - DELETE / balneabilidade/{id} → Remove análise

 ## Relatórios

 - GET / relatorios → Lista relatórios disponíveis
 - GET / relatorios/{id} → Obte relatório específico
 - GET / balneabilidade/{id}/relatorio → Relatório associado a uma análise
 - POST / relatorios → Cadastra relatório (uso interno/admin)
 - DELETE / relatorios/{id} → Remove relatório

# Parametros de requisição

  ## Usuários
   ## GET /usuarios

 Query params (opcionais):
page (int) → número da página (default: 1)
per_page (int) → quantidade por página (default: 20, max: 100)
nome (string) → filtrar por nome
email (string) → filtrar por e-mail

  ## GET /usuarios/{id}
     Path params:
     id (string | UUID | int) → identificador único do usuário
 
     POST /usuarios
     (JSON): 
{
  "nome": "string (obrigatório)",
  "email": "string (obrigatório, formato válido)",
  "senha": "string (obrigatório, mínimo 8 caracteres)",
  "perfil": "admin|gestor|visualizador (default: visualizador)",
  "telefone": "string (opcional)"
}

   ## PUT /usuarios/{id}
      Path params:
      id → id do usuário
      Body (JSON):
{
  "nome": "string (opcional)",
  "email": "string (opcional)",
  "senha": "string (opcional, mínimo 8 caracteres)",
  "perfil": "admin|gestor|visualizador",
  "telefone": "string (opcional)"
}

   ## DELETE /usuarios/{id}
      Path params:
      id → id do usuário

  ## Praias
   ## GET /praias
      Query params
      page (int)
      per_page (int)
      nome (string) → filtrar por nome da praia
      bairro (string) → filtrar por bairro/localização
 
   ## GET /praias/{id}
      Path params:
      id (string | int)

   ##  PUT /praias/{id}
      Path params:
      id
      Body (JSON):
{
  "nome": "string (opcional)",
  "bairro": "string (opcional)",
  "latitude": "float (opcional)",
  "longitude": "float (opcional)",
  "status_monitoramento": "ativo|inativo (opcional)"
}

   ## DELETE /praias/{id}
      Path params:
      id

 ## Balneabilidade
   ## GET /balneabilidade
      Query params (opcionais):
      page (int)
      per_page (int)
      praia_id (string) → filtrar por praia
      data_inicial (date) → ex: 2025-01-01
      data_final (date)
      resultado (string) → propria|impropria|cuidado

   ## GET /balneabilidade/{id}
      Path params:
      id

   ## GET /praias/{id}/balneabilidade
      Path params:
      id → id da praia
      Query params (opcionais): iguais a GET /balneabilidade

   ## PUT /balneabilidade/{id}
      Path params:
      id
      Body (JSON):
{
  "data_coleta": "YYYY-MM-DD",
  "hora_coleta": "HH:MM",
  "praia_id": "string",
  "resultado": "propria|impropria|cuidado",
  "parametros": [
    {
      "nome": "E.coli",
      "valor": 850,
      "unidade": "NMP/100mL"
    }
  ],
  "observacoes": "string"
}

   ##  DELETE /balneabilidade/{id}
       Path params:
       id

 ## Relatórios
   ## GET /relatorios
      Query params (opcionais):
      page (int)
      per_page (int)
      tipo (string) → mensal|semanal|especial
      data_inicial (date)
      data_final (date)

   ## GET /relatorios/{id}
Path params:
id
   ## GET /balneabilidade/{id}/relatorio
      Path params:
      id → id da análise de balneabilidade

   ## POST /relatorios
      Body (JSON):
{
  "titulo": "string (obrigatório)",
  "tipo": "mensal|semanal|especial",
  "periodo_inicio": "YYYY-MM-DD",
  "periodo_fim": "YYYY-MM-DD",
  "arquivo_url": "string (URL do relatório)",
  "descricao": "string (opcional)"
}

   ##  DELETE /relatorios/{id}
       Path params:
       id


 # Formatos de resposta 

  ## Usuários
  {
  "success": true,
  "data": [{
      "id": "u-001",
      "nome": "João Silva",
      "email": "joao.silva@email.com",
      "perfil": "admin",
      "telefone": "(85) 99999-8888",
      "criado_em": "2025-09-01T10:20:00Z"
    },{
      "id": "u-002",
      "nome": "Maria Souza",
      "email": "maria.souza@email.com",
      "perfil": "visualizador",
      "telefone": null,
      "criado_em": "2025-09-05T14:40:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 2
  }
}

  ## POST /usuarios (Created)
  {
  "success": true,
  "message": "Usuário cadastrado com sucesso",
  "data": {
    "id": "u-003",
    "nome": "Carlos Mendes",
    "email": "carlos@email.com",
    "telefone": "(85) 98888-7777",
    "criado_em": "2025-09-20T15:45:00Z"
  }
}

  ## Práias

   ## GET /praias
 {
  "success": true,
  "data": [
    {
      "id": "p-001",
      "nome": "Praia de Iracema",
      "bairro": "Centro",
      "status_monitoramento": "ativo"
    },
    {
      "id": "p-002",
      "nome": "Praia do Futuro",
      "bairro": "Praia do Futuro",
      "status_monitoramento": "ativo"
    }
  ]
}

   ## PUT /praias/{id}
 {
  "success": true,
  "message": "Praia atualizada com sucesso",
  "data": {
    "id": "p-002",
    "nome": "Praia do Futuro",
    "bairro": "Praia do Futuro",
    "status_monitoramento": "ativo"
  }
}

  ## Balneabilidade
   {
  "success": true,
  "data": [
    {
      "id": "b-101",
      "praia_id": "p-002",
      "praia_nome": "Praia do Futuro",
      "data_coleta": "2025-09-15",
      "hora_coleta": "08:30",
      "resultado": "propria",
      "parametros": [
        {
          "nome": "E.coli",
          "valor": 850,
          "unidade": "NMP/100mL"
        },

      ]
    },
    {
      "id": "b-102",
      "praia_id": "p-001",
      "praia_nome": "Praia de Iracema",
      "data_coleta": "2025-09-16",
      "hora_coleta": "09:15",
      "resultado": "impropria",
      "parametros": [
        {
          "nome": "E.coli",
          "valor": 2500,
          "unidade": "NMP/100mL"
        }
      ]
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 2
  }
}

  ## PUT /balneabilidade/{id}

{
  "success": true,
  "message": "Análise de balneabilidade atualizada com sucesso",
  "data": {
    "id": "b-101",
    "praia_id": "p-002",
    "data_coleta": "2025-09-15",
    "hora_coleta": "08:30",
    "resultado": "propria",
    "parametros": [
      {
        "nome": "E.coli",
        "valor": 850,
        "unidade": "NMP/100mL"
      },
      {
        "nome": "pH",
        "valor": 7.2,
        "unidade": "-"
      }
    ],
    "observacoes": "Condições normais"
  }
}

  ## Relatórios

  ## GET /relatorios
  {
  "success": true,
  "data": [
    {
      "id": "r-001",
      "titulo": "Relatório Mensal - Setembro/2025",
      "tipo": "mensal",
      "periodo_inicio": "2025-09-01",
      "periodo_fim": "2025-09-20",
      "arquivo_url": "https://api.exemplo.lab.br/files/relatorios/r-001.pdf"
    },
    {
      "id": "r-002",
      "titulo": "Relatório Especial - Eventos de Chuva",
      "tipo": "especial",
      "periodo_inicio": "2025-09-10",
      "periodo_fim": "2025-09-18",
      "arquivo_url": "https://api.exemplo.lab.br/files/relatorios/r-002.pdf"
    }
  ]
}

  ## POST /relatorios
  {
  "success": true,
  "message": "Relatório cadastrado com sucesso",
  "data": {
    "id": "r-003",
    "titulo": "Relatório Semanal - Semana 38",
    "tipo": "semanal",
    "periodo_inicio": "2025-09-13",
    "periodo_fim": "2025-09-20",
    "arquivo_url": "https://api.exemplo.lab.br/files/relatorios/r-003.pdf",
    "descricao": "Monitoramento semanal"
  }
}

 ## Autenticação e Autorização

A API pode utilizar JWT (JSON Web Token), que é o padrão mais comum para aplicações REST.
O usuário faz login em POST /auth/login enviando credenciais (email + senha).
O sistema retorna:
  - access_token (curta duração, ex: 15 min – 1h)
  - refresh_token (longa duração, ex: 7 dias – 30 dias)
  Login/request
  {
  "email": "joao.silva@email.com",
  "senha": "minhasenha123"
}

   ## Response 

{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "dXN1YXJpby1pZC0wMDE6c2VjcmV0LWRhdGE...",
    "expires_in": 3600
  }
}

  ## Renovação de Token
  Request
     POST /auth/refresh
     Authorization: Bearer <refresh_token>
  Response
  {
  "success": true,
  "data": {
    "access_token": "novoAccessToken...",
    "expires_in": 3600
  }
}
  Logout
    POST /auth/logout
    Authorization: Bearer <access_token>
  Response
  {
  "success": true,
  "message": "Logout realizado com sucesso"
}
  ## Envio do Token nas Requisições
      GET /usuarios
      Authorization: Bearer <access_token>

 ## Exemplos de Chamadas e Respostas

  Login
  curl -X POST https://api.exemplo.gov.br/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao.silva@email.com",
    "senha": "minhasenha123"
  }'
  Resposta
  {
  "success": true,
  "data": {
    "access_token": "eyJhbGc...abc123",
    "refresh_token": "eyJhbGc...xyz789",
    "expires_in": 3600
  }
}
  Usuários
   Criar usuário
   curl -X POST https://api.exemplo.gov.br/usuarios \
   -H "Authorization: Bearer eyJhbGc...abc123" \
   -H "Content-Type: application/json" \
   -d '{
    "nome": "Maria Souza",
    "email": "maria.souza@email.com",
    "senha": "senhaSegura123",
  }'
 Resposta
 {
  "success": true,
  "message": "Usuário cadastrado com sucesso",
  "data": {
    "id": "u-002",
    "nome": "Maria Souza",
    "email": "maria.souza@email.com",
    "perfil": "gestor",
    "telefone": "(85) 98888-7777",
    "criado_em": "2025-09-20T14:30:00Z"
  }
}



   



