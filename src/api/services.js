const { MongoClient, ObjectId } = require("mongodb");
const uri = 'mongodb+srv://searomx:sioxPfpBB6wxSTO6@clustercnpj.uglz7ef.mongodb.net/dbclientes&retryWrites=true&w=majority';

async function connect() {
    if (global.db)
        return global.db;
    const conn = await MongoClient.connect(uri);
    if (!conn)
        return new Error("Sem Conexao com o Banco de Dados");
    global.db = await conn.db("dbclientes");
    return global.db;
}

async function findClienteBase() {
    const db = await connect();
    return db.collection('baseCnpj').find().toArray();
    //return db.collection('baseCnpj').find().limit(100).toArray();
}
async function findCnpjBase(cnpjcli) {
    const db = await connect();
    return db.collection('cliente').find({ cnpj: cnpjcli });
}

async function insertDadosCliente(dados) {
    const db = await connect();
    try {
        return db.collection('cliente').insertOne(dados);
    } catch (e) {
        console.log(e);
    }
}
async function deleteCnpj(id) {
    const db = await connect();
    try {
        return db.collection('baseCnpj').deleteOne({ _id: id });
    } catch (e) {
        console.log(e);
    }
}

module.exports = { findCnpjBase, insertDadosCliente, deleteCnpj, findClienteBase }