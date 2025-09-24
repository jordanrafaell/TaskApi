# 🚀 TaskAPI

[![Node.js](https://img.shields.io/badge/Node.js-ES2022-green)](https://nodejs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)](https://www.mongodb.com/) 

Uma API REST construída como desafio pessoal para praticar integração com MongoDB, geração de dados falsos e manipulação de arquivos. O projeto simula uma base de usuários e oferece funcionalidades essenciais como inserção, listagem e exclusão.

---

## 📦 Tecnologias Utilizadas

- **Node.js + Express** — servidor HTTP leve e rápido  
- **TypeScript** — tipagem estática para maior segurança  
- **MongoDB + Mongoose** — banco de dados NoSQL e ODM  
- **@faker-js/faker** — geração de usuários falsos  
- **ts-node + nodemon** — execução e hot reload em ambiente de desenvolvimento  
- **uuid** — geração de identificadores únicos  
- **fs + path** — manipulação de arquivos e diretórios  

---

## 📁 Funcionalidades

- **Inserção de usuários falsos**: Gera e insere múltiplos usuários na coleção `suacolletion`  
- **Listagem de usuários**: Exporta todos os usuários para um arquivo `users.json`  
- **Exclusão de dados**: Remove todos os documentos da coleção  
- **Scripts personalizados**: Comandos via `npm run` para executar tarefas específicas  
- **Prompt interativo**: Pergunta no console se deseja gerar usuários caso a coleção esteja vazia  


---
### 🧠 Aprendizados

- Conexão direta com MongoDB usando MongoClient

- Geração e exportação de dados em massa usando @faker-js/faker

- Organização de código em camadas (controllers, models, data)

- Automação de tarefas com scripts npm run

---
### 📂 Estrutura do Projeto

TaskApi/<br>
├── src/<br>
│   ├── app.ts<br>
│   ├── controllers/<br>
│   │   ├── deleteUsers.ts<br>
│   │   ├── listUsers.ts<br>
│   ├── models/<br>
│   │   └── generatorUser.ts<br>
│   ├── data/<br>
│   │   └── users.json<br>

---

## 🧪 Scripts disponíveis

```bash
npm run dev         # Inicia o servidor em modo de desenvolvimento (hot reload)
npm run deleteUser  # Remove todos os usuários do banco
npm run listUser    # Exporta os usuários para users.json
npm run deleteJson  # Apaga o arquivo users.json
