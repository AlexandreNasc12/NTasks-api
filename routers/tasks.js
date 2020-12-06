module.exports = app => {

    const Tasks  = app.models.tasks;

    app.get("/tasks", (req, res) => {

        Tasks.listar({},(tasks) => {
             res.json({
                tasks : tasks 
            });
        });
    });
}