const { MongoClient, ObjectId } = require("mongodb");
const uri = 'mongodb+srv://searomx:sioxPfpBB6wxSTO6@clustercnpj.uglz7ef.mongodb.net/dbclientes&retryWrites=true&w=majority';

const conectar = async () => {
    if (global.db)
        return global.db;
    const conn = await MongoClient.connect(uri);
    if (!conn)
        return new Error("Sem Conexao com o Banco de Dados");
    global.db = await conn.db("dbclientes");
    return global.db;
}
module.exports = { conectar };
