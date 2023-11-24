const cnpjController = require('./controller/apicnpj');
const routes = require('express').Router();


routes.get('/cnpj', async(req,res) =>{
    try{
        const dados = await cnpjController.findAll();
        res.json(dados);
        console.log(res.json(dados));
    }catch(ex){
        res.status(500).send({message: ex.message});
    }   

});

routes.get('/getcnpj', async(req, res) => {
    const dados = await api.findAll();
    res.json(dados);
});

routes.get('/qtdcnpj/:limit', async (req, res, next) => {
    try{
    const nmlimite = req.params.limit;
    const dados = await api.findClienteLimite(parseInt(nmlimite));
    console.log(nmlimite);
    res.json(dados._id);
    }catch(e){
        console.log(e);
        res.status(400).send({ message: `${e}` });
    }

    next();
    
});

routes.post('/cnpj', async(req, res) => {
    let strcnpj = [];
    try {
        //const dados = await api.findAll();
        //res.json(dados);
        const dadosCnpj = req.body;
        //
        res.status(200).json({ message: 'Requisição processada com sucesso' });
        
            
            console.log(dadosCnpj);
            //getCNPJ(item.cnpj);       
        

        
        //("00000000000000" + item.cnpj).slice(-14)
        //console.log("Dados Recebidos: ",dadosCnpj);
       // getCNPJ(cnpj);
        
    } catch (ex) {
        res.status(500).send({ message: ex.message });
    }
    
});


module.exports = routes;