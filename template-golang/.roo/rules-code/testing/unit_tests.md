**Testes Automatizados**

**Configuração:**
- Estrutura: `meuapp/tests/` com `test_models.py`, `test_views.py`, `test_serializers.py`, etc.
- Para chamados que envolvem API externa, use sempre o `requests-mock`

**Imports de Factories:**
```python
# Factories existentes
from model_factories.meuapp.modelo import ModeloFactory
from model_factories.user.user import UserFactory
```

**Padrões de Teste:**

*Models:*
```python
@pytest.mark.django_db
def test_criacao_basica():
    modelo = ModeloFactory()
    assert modelo.pk is not None

@pytest.mark.django_db
def test_str_representation():
    modelo = ModeloFactory(nome="Teste")
    assert str(modelo) == "Teste"
```

*APIs:*
```python
@pytest.mark.django_db
def test_api_autenticada(authenticated_api_client):
    ModeloFactory.create_batch(3)
    url = reverse("app:modelo-list")
    response = authenticated_api_client.get(url)
    assert response.status_code == 200
    assert len(response.data) == 3

def test_api_nao_autenticada():
    client = APIClient()
    response = client.get(reverse("app:modelo-list"))
    assert response.status_code == 401
```

*Views com Forms:*
```python
@pytest.mark.django_db
def test_criar_objeto(client):
    user = UserFactory()
    client.force_login(user)
    response = client.post(reverse("app:criar"), {
        "nome": "Teste",
        "valor": 100.00
    })
    assert response.status_code == 302
    assert MeuModelo.objects.filter(nome="Teste").exists()
```

**Boas Práticas:**
- Use `@pytest.mark.django_db` para testes com BD
- Importe factories do `model_factories/`
- Organize em classes com docstrings descritivas
- Teste sucesso, erro e edge cases
- Use `create_batch()` para múltiplos objetos