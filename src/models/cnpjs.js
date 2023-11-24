const mongoose = require('mongoose');

const Cnpj = mongoose.model('Cnpj', {
    cnpj_raiz: {
        type: String,
        required: true,
        unique: true
    },
    razao_social: {
        type: String,
        required: true,
    },
    capital_social: {type: String,},
    responsavel_federativo: { type: String},
    atualizado_em: {type: String},
    porte: {type: String},
    natureza_juridica: {type: String},
    qualificacao_do_responsavel: {type: String},
    simples: {type: String},
    estabelecimento:{
        cnpj: {type: String,}
        atividades_secundarias: [
            {
                id: {type: String},
                secao: {type: String},
                divisao: {type: String},
                grupo: {type: String},
                classe: {type: String},
                subclasse: {type: String},
                descricao: {type: String},
            },
        ],
    tipo: {type: String},
    nome_fantasia: {type: String},
    situacao_cadastral: {type: String},
    data_situacao_cadastral: {type: String},
    data_inicio_atividade:{type: String},
    },
    tipo_logradouro: {type: String},
    logradouro:{type: String},
    numero: {type: String},
    complemento: {type: String},
    bairro: {type: String},
    cep: {type: String},
    ddd1: {type: String},
    telefone1: {type: String},
    email: {type: String},
    atividade_principal: {
        id: {type: String},
        secao: {type: String},
        divisao: {type: String},
        grupo: {type: String},
        classe: {type: String},
        subclasse: {type: String},
        descricao: {type: String},
      },

})
module.exports = Cnpj;
