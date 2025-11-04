# 🐾 Pets+ / Front-End
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Este repositório contém o **front-end da aplicação Pets+**, um sistema desenvolvido para facilitar o gerenciamento de pets e suas carteirinhas de vacinação.

## Arquitetura do Projeto

O projeto segue uma **estrutura inspirada na arquitetura FSD (Feature-Sliced Design)**, organizada para facilitar manutenção e escalabilidade.  
As pastas principais são:

- **app** — configuração global da aplicação.
- **assets** — imagens, ícones e fontes. 
- **entities** — modelos de dados e lógica relacionada a objetos do domínio.  
- **features** — funcionalidades independentes e reutilizáveis.  
- **pages** — telas da aplicação.  
- **shared** — utilitários reutilizáveis em todo o projeto.  
- **widgets** — componentes compostos menores.


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

## Back-End da Aplicação

Para acessar e rodar o back-end da aplicação Pets+, visite o repositório:
[Back-End](https://github.com/Attonic/pet-connect-be)

---

Desenvolvido pela equipe Pets+ 🐾
