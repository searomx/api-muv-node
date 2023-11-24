const consultarCNPJ = require("consultar-cnpj");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const app = express();
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const router = require('./router');
const nodeCron = require('node-cron');
var strtoken = "";
const baseCnpj = [];
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    app.use(cors());
    next();
});



//app.use(router);

// const paramsRoutes = require('./routes/paramsRouter');
// router.use('/token', paramsRoutes);

// router.post('/cnpj', async function(req, res, next){
//     try{
//     const cnpj = req.body;
//     // const db = await connect();
//     // res.json(await db.collection("customers").
//     // insertOne(customer));

//     console.log(cnpj);

//     }
//     catch(ex){
//     console.log(ex);
//     res.status(400).json({erro: `${ex}`});
//     }
//     })



async function getCNPJ(cnpj) {
    let xcnpj = JSON.stringify(cnpj);
    console.log('O CNPJ ENVIADO FOI:' + xcnpj);
        // const token = "";
        // const array_cnpj = [];
        // const dados_cnpj = await api.findCnpjBase();
        // console.log(dados_cnpj.length);
        // dados_cnpj.map(function (e) {
        //     array_cnpj.push(e._id);
        // });

        // try {
        //     for (var i = 0; i <= array_cnpj.length; i++) {
        //         let cnpjInfo = array_cnpj[i];
        //         console.log(cnpjInfo);
        //         await consultarCNPJ('84945856000120', token).then(dados => {
        //             api.insertDadosCliente(dados);
        //             api.deleteCnpj(cnpjInfo);
        //         });
        //         let valorDec = i;
        //         console.log(valorDec);
        //     };
        // } catch (e) {
        //     console.log(e);
        // }
    }

app.use(routes);
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo Quebrou!');
});

app.listen(3000,() => console.log('Servidor rodando na porta 3000'));
module.exports = app;

//getCNPJ();
//nodeCron.schedule('*/3 * * * * ', () => getCNPJ());
  //mongodb+srv://flaviocmoraes:nLTEVA3zkh5twx3@clustermuvs.zqncpgg.mongodb.net/dbcnpj?retryWrite=true&w=majority