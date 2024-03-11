# Directory Manager

Directory Manager é um sistema de gerenciamento de pastas no qual você terá pastas raizes (pai) e seus subdiretórios (filhos), podendo realizar um CRUD completo para gerenciar da forma que quiser.

## Sobre este projeto

<h3>Funcionalidades implementadas</h3>

- Login;
- Logout;
- Criar pastas;
- Acessar pastas;
- Deletar pastas;
- Editar pastas;

<h3>Próximos passos:</h3>

- Implementar testes;
- Implementar pipeline CI/CD;
- Dockerizar o projeto;

## Technologies

The following technologies were used to develop this project:

<div>
  
  ![VITE](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  ![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
  ![Env](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
  ![Eslint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white)
  ![Prettier](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)

</div>

## Instalação e como usar

Antes de tudo, clone o projeto e instale as dependências.

```
git clone https://github.com/FernandoM52/directory_manager.git
cd directory_manager/
npm install
```

Agora, note que há um arquivo `.env.example`, utilize-o como modelo para criar um arquivo `.env` e preencher a variável com o link da api fonercida para consumo.

```
VITE_BASE_URL=Link_da_api_para_consumo
```

Rode o comando abaixo para executar o projeto localmente:

```
npm run dev
```
