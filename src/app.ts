// src/app.ts
import express from 'express';
import mongoose from 'mongoose';
import { MongoClient, Db, Collection } from 'mongodb';
import { users } from './models/generatorUser.ts';

const app = express();
const port = 3000;
const mongoURL = 'mongodb://localhost:27017/taskApi';
// selecionando o DB
const dbName = 'taskApi';

const client = new MongoClient(mongoURL);

app.use(express.json());

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('mongoDB conectado');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.log(`error ao conectar ao mongoDB ${err}`);
  });

async function main() {
  try {
    // conectando ao servidor
    await client.connect();
    console.log('conectado ao mongoDB');

    // selecionando o DB
    const db: Db = client.db(dbName);
    console.log(`conectado ao banco de dados ${dbName}`);

    // selecionando a coleção do BD
    const collection: Collection = client
      .db(dbName)
      .collection('userCollection');
    console.log(`conectado a coleção userCollection`);

    // inserindo users
    const resultado = await collection.insertMany(users);
    if (resultado.insertedCount > 0) {
      console.log(
        `Total de usuários inseridos ${resultado.insertedCount} no banco de dados: ${dbName} e coleção: ${collection.collectionName}`
      );
      console.log(`Total de usuários na coleção: ${users.length}`);
      await client.close();
    } else {
      console.log(
        `Nenhum usuário foi inserido no banco de dados: ${dbName} e coleção: ${collection.collectionName}`
      );
      await client.close();
    }
    if (users.length === 0) {
      await client.close();
    }


  } catch (err) {
    console.log(`erro ao conectar ao mongoDB ${err}`);
    return;
  } finally {
    await client.close();
  }
}

main();

export default app;
