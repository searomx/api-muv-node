const conn = require('../database/db');

async function findAll() {
    const db = await conn.conectar();
    return db.collection('cliente').find().toArray();
}

async function findClienteBase() {
    const db = await conn.conectar();
    return db.collection('baseCnpj').find().toArray();
    //return db.collection('baseCnpj').find().limit(100).toArray();
}

async function findClienteLimite(limite) {
    const db = await conn.conectar();
    const limit = parseInt(limite);  
    const query = {};
    const sort = { length: -1 };
    //const limite = 1;
    const skip = limit;
    try { 
    return db.collection('cliente').find(query).sort(sort).limit(limit).skip(skip).toArray();
    } catch (e) {
        console.log(e);
    }
}
async function findCnpjBase(cnpjcli) {
    const db = await conn.conectar();
    return db.collection('cliente').find({ cnpj: cnpjcli });
}

async function insertDadosCliente(dados) {
    const db = await conn.conectar();
    try {
        return db.collection('cliente').insertOne(dados);
    } catch (e) {
        console.log(e);
    }
}
async function deleteCnpj(id) {
    const db = await conn.conectar();
    try {
        return db.collection('baseCnpj').deleteOne({ _id: id });
    } catch (e) {
        console.log(e);
    }
}

module.exports = { findAll, findClienteLimite, findCnpjBase, insertDadosCliente, deleteCnpj, findClienteBase }