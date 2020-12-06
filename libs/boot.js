module.exports = app =>{
    app.listen(app.set('port'),() =>{
        console.log(`Ntask API - porta ${app.get('port')}`);
    })
}