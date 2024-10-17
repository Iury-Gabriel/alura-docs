import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://princemods1:12345@cluster0.yq5rkbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-docs");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
