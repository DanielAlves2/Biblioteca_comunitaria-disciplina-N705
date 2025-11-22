# Relatório de Validação com Público-Alvo

### Perfil 1: Representante Jurídico e Morador

### 1. Metodologia

A validação foi realizada no dia **22/11/2025**, através de videoconferência via **Google Meet**, dada a disponibilidade do entrevistado.

A técnica utilizada foi a de **Entrevista com Demonstração Guiada (Screen Sharing)**:

- **Apresentação:** O entrevistador compartilhou a tela apresentando o contexto do projeto e os objetivos da Biblioteca Comunitária.  
- **Navegação Assistida:** O entrevistador navegou pelo protótipo/sistema enquanto o entrevistado solicitava ações e fazia perguntas (“Clique ali”, “O que acontece se eu fizer isso?”).  
- **Coleta de Dados:** As observações e feedbacks foram anotados em tempo real pelo entrevistador durante a chamada.

---

### 2. Feedbacks Coletados

Durante a sessão no Google Meet, o usuário **Arthur Nogueira Soares** pontuou as seguintes observações críticas:

#### **Feedback 1: Termos e LGPD (Visão Jurídica)**

- **Contexto:** Tela de Cadastro de Usuário.  
- **Comentário do usuário:**  
  “Eu vi que vocês pedem Endereço. Como advogado, sinto falta de um 'li e concordo' ou de um link para os termos de uso. Eu preciso saber como a biblioteca vai usar meu endereço e quais são as regras se eu atrasar um livro. Tem multa? Eu fico bloqueado?”  
- **Criticidade:** Alta.

---

#### **Feedback 2: Clareza no Status do Livro**

- **Contexto:** Tela de Listagem/Busca de Livros.  
- **Comentário do usuário:**  
  “A lista de livros está bonita, mas olhando aqui para 'Dom Casmurro', eu não sei se ele está na estante agora ou se alguém levou. Eu teria que ir até a biblioteca só para descobrir que não tem?”  
- **Criticidade:** Média.

---

### **Feedback 3: Detalhes do Evento e Acessibilidade**

- **Contexto:** Tela de Visualização de Eventos (Oficina de Leitura).  
- **Comentário do usuário:**  
  “Moro aqui no Mucuripe e é difícil achar estacionamento ou saber exatamente onde ficam as salas comunitárias. Na descrição do evento seria ótimo ter uma referência mais exata do local ou se tem acessibilidade, pois gostaria de levar minha mãe que é idosa.”  
- **Criticidade:** Baixa (Melhoria de Usabilidade).

---

### 3. Ajustes Implementados e Melhorias

Com base nas anotações feitas durante a entrevista, a equipe realizou as seguintes alterações no sistema:

#### **Inclusão de Checkbox de Termos (Feedback 1)**

- Adicionado um checkbox obrigatório no formulário de cadastro:  
  **“Declaro que li e concordo com as regras de empréstimo da biblioteca.”**
- **Alteração técnica:** Atualização no Frontend (React) e validação no Backend para impedir o cadastro sem o aceite explícito.

---

#### **Indicador Visual de Disponibilidade (Feedback 2)**

Na listagem de livros foi adicionada uma etiqueta visual:

- **Verde:** Disponível para empréstimo  
- **Vermelho:** Indisponível / Emprestado

**Alteração técnica:** A API de listagem de livros foi ajustada para retornar o status calculado dinamicamente com base nos exemplares disponíveis (Atendendo aos requisitos RF01/RF06).

---

#### **Enriquecimento da Descrição de Eventos (Feedback 3)**

- Alterado o layout do card de eventos para permitir descrições mais completas.  
- Incluídos campos opcionais para:
  - **Ponto de Referência**
  - **Informações de Acessibilidade**

---

## 4. Conclusão

A validação com um morador do Mucuripe e profissional da área jurídica trouxe uma visão crítica sobre a transparência das regras do sistema, algo que não havia sido mapeado inicialmente pela equipe técnica.  

As alterações implementadas aumentaram a **confiabilidade do software** e melhoraram a **experiência de busca do usuário**, evitando deslocamentos desnecessários até a biblioteca.
