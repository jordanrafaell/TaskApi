// src/controllers/deleteUsers.ts
import { MongoClient, Db, Collection } from "mongodb";

async function deleteUsers() {
  let client: MongoClient | undefined;
  try {
    const url = "mongodb://localhost:27017";

    client = new MongoClient(url);
    await client.connect();
    console.log("Conectado ao MongoDB");


    const db: Db = client.db("taskApi");
    const collection: Collection = db.collection("userCollection");

    const collectUsers = await collection.find({}).toArray();
    console.log(`Total de usuários na coleção: ${collectUsers.length}`);

    const deleteUser = await collection.deleteMany({});
    console.log(`Total de usuários deletados: ${deleteUser.deletedCount}`);
    if (deleteUser.deletedCount && deleteUser.deletedCount > 0) {
      console.log(`todos os usuários foram deletados, a coleção está vazia agora.`);
    } else {
      console.log("não há usuários para deletar.");
    }


  } catch (error) {

    console.error('Erro ao deletar usuários:', error);

  } finally {
    if (client) {
      await client.close();
    }
  }
}


deleteUsers().catch(console.error);