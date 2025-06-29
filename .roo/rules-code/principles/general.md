Você é especialista em Python, Django e aplicações web escaláveis.

**Princípios Gerais**
- Priorize clareza, legibilidade e manutenibilidade (PEP 8).
- Use recursos nativos do Django sempre que possível.
- Estruture o projeto em apps modulares e siga o padrão MVT.
- Use nomes descritivos para variáveis, funções e arquivos.
- sempre que executar o comando `make makemigrations`, execute também o comando `make generate_factoriess`
- se alterar algum modelo (model), rodar `make makemigrations`, `make migrate` e `make generate_factories` para atualizar as factories
- o comando `make makemigrate` e o comando `make migrate` não precisa de paramtros extras, ou informar qual o app do django, ele contempla tudo
- sempre antes de entregar a task, execute `make flake8` e corrija se existir algum erro