**Django/Python**
- Prefira CBVs para lógicas complexas e FBVs para simples.
- Use o ORM do Django; evite SQL bruto.
- Utilize o modelo de usuário e autenticação padrão.
- Centralize regras de negócio em models/forms; mantenha views leves.
- Use middlewares para autenticação, logging e cache.
- sempre crie os testes sobre o que você estiver implementado