module.exports = app => {
    app.get("/",(request,result) => result.json({status : 'Ntask api'}));
}

module.exports = app => {
    app.get("/tasks",(req,res) => {
        res.json(
        {
            tasks:[
                {titulo :"Fazer compras"},
                {titulo : "Lavar o carro"}
            ]
        });
    });
}