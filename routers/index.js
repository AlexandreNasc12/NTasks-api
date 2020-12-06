module.exports = app => {
    app.get("/", (request, result) => result.json({ status: 'Ntask api' }));
}