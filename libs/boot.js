module.exports = app =>{
    app.db.async().done(() => {

        app.listen(app.set('port'),() =>{
            console.log(`Ntask API - porta ${app.get('port')}`);
        });

    });
}