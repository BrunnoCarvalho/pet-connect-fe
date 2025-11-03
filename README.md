# 🐾 PetConnect - Front-End

Este repositório contém o **front-end da aplicação PetConnect**, um sistema desenvolvido para facilitar o gerenciamento de pets e suas carteirinhas de vacinação.  

## Estrutura do Projeto

As branchs estão organizadas por **features** específicas do sistema e seguem o padrão de nomenclatura:

- feature/{nomeDaFeature}

Exemplo:
1. feature/pet-card
2. feature/loginPage
3. feature/newPet

Após a conclusão de uma feature, é aberto um **Pull Request (PR)** para realizar o **merge com a branch `develop`**.

## Fluxo da Aplicação

O fluxo principal da aplicação segue a seguinte ordem:

1. **Home**  
2. **Cadastro de Usuário**  
3. **Login**  
4. **Tela de Perfil (ONG, Tutor, Clínica Veterinária)**  
5. **Cadastro de Pet**  
6. **Carteirinhas dos Pets**

## Como executar o projeto

Obs.: o projeto pode ser executado a partir da branch develop (onde as features estão unificadas) ou a partir de qualquer branch de feature (para testar uma feature específica). Em ambos os casos, troque para a branch desejada antes de instalar e rodar.

### Clonar o Repositório
```bash
git clone https://github.com/BrunnoCarvalho/pet-connect-fe.git
```
Ao clonar o repositório, você terá apenas a branch padrão ativa localmente, mas todas as outras branches remotas estarão disponíveis.

- Ver todas as branches (locais e remotas)
```bash
git branch -a
```
- Acessar uma branch de feature específica

Se quiser rodar uma branch remota (por exemplo feature/pet-card), execute:

```bash
git switch -t origin/feature/pet-card
```


### Instalar Dependências
```bash
npm install
```
### Executar o Projeto
```bash
npm run dev
```
O projeto será executado localmente (geralmente em http://localhost:5173).

---

Desenvolvido pela equipe PetConnect 🐾
