// src/controllers/listUsers.ts
import { MongoClient, Db, Collection } from 'mongodb';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function listUsers() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  try {
    await client.connect();

    const clientAdmin = client.db().admin();
    const resultPing = await clientAdmin.ping();

    if (resultPing.ok === 1) {
      console.log('conectado ao MongoDB');
    } else {
      console.log('não foi possível conectar ao MongoDB');
      return;
    }

    const dbName = 'taskApi';
    const db: Db = client.db(dbName);
    console.log(`conectado ao banco de dados ${dbName}`);

    const dbCollectionName = 'userCollection';
    const collection: Collection = db.collection(dbCollectionName);
    console.log(`conectado à coleção ${collection.collectionName}`);

    // buscar dados da coleção
    const users = await collection.find({}).toArray();
    if (users.length === 0) {
      console.log(
        `Não existem usuários na coleção. Para gerar novos usuários, rode o comando: npm run dev`
      );
      await client.close();
      return;
    } else {
      console.log(`Existem ${users.length} usuários na coleção.`);
      await client.close();
    }

    // definir o caminho do arquivo JSON
    const data = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(path.join(data))) {
      console.log('pasta data não existe');

      // criando a pasta data
      console.log('criando a pasta data....');

      setTimeout(() => {
        fs.mkdirSync(path.join(data));
        console.log('pasta data criada com sucesso!');
      }, 5000);
    }
    if (users.length > 0) {
      // criando o arquivo users.json
      setTimeout(() => {
        console.log('criando o arquivo users.json....');
      }, 7000);

      setTimeout(() => {
        const filePath = path.join(data, 'users.json');
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        console.log('Arquivo users.json criado com sucesso!');
        console.log(`Arquivo users.json criado em ${filePath}`);
      }, 10000);
    } else {
      console.log('não há usuários para listar');
      await client.close();
      return;
    }
  } catch (err) {
    console.log(`erro ao conectar ao mongoDB ${err}`);
  } finally {
    await client.close();
  }
}

listUsers();

export default listUsers;
