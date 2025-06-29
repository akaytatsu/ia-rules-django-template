**Comandos (sempre via Makefile):**
- `make up`: Sobe containers
- `make test`: Roda testes
- `make flake8`: Qualidade código
- `make migrate`/`makemigrations`: Migrações
- `make createsuperuser`: Cria superusuário

**Importante:**
- Verifique se o container está rodando com o comando `docker ps`, se não tiver rode o comando `make up`
- Sempre execute o comando `make flake8` para verificar se o código está ok
- Sempre execute o comando `make test` para verificar se o código está ok
- nunca use comandos diferentes destes
- nunca execute o comando python fora do container docker
- sempre que precisar rodar algum test/teste, use o comando `make test`
- sempre que fizer alterações em models.py, execute o comando `make makemigrations`
- sempre antes de entregar a task, execute `make flake8` e corrija se existir algum erro