module.exports = app => {
    return {
        ObterTodas : (params, callback) =>{
            return callback([
                {titulo : 'Lavar a louça'},
                {titulo : 'Formatar Pc'},
                {titulo : 'Criar banco de dados'}
            ]);
        }
    };
};