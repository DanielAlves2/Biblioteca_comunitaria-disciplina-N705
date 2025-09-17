
# Edpoints previstos


## Praias

 - GET /praias → Listar todas as praias monitoradas
 - GET /praias/{id} → Detalhar uma praia específica
 - PUT /praias/{id} → Atualizar praia
 - DELETE /praias/{id} → Remover praia

 ## Balneabilidade

 - GET /balneabilidade → Listar todas as análises de balneabilidade
 - GET /balneabilidade/{id} → Detalhar uma análise específica
 - GET /praias/{id}/balneabilidade → Listar análises de uma praia
 - PUT /balneabilidade/{id} → Atualizar análise
 - DELETE /balneabilidade/{id} → Remover análise

 ## Relatórios

 - GET /relatorios → Listar relatórios disponíveis
 - GET /relatorios/{id} → Obter relatório específico
 - GET /balneabilidade/{id}/relatorio → Relatório associado a uma análise
 - POST /relatorios → Cadastrar relatório (uso interno/admin)
 - DELETE /relatorios/{id} → Remover relatório