const express = require('express');
const app = express();

app.use(express.json());

let toDos = [
    "this is how servers work"
];

app.get('/todos', (req, res) => {
    res.send(toDos);
});

app.post('/todos', (req, res) => {
    const newTask = req.body.task;
    toDos.push(newTask);
    res.send(`Successfully added: "${newTask}"`);
});

app.put('/todos/:id', (req, res) => {
    const taskNumber = req.params.id;
    const updatedTask = req.body.task;

    toDos[taskNumber] = updatedTask;
    res.send(`Updated task #${taskNumber} to: "${updatedTask}"`);
});

app.delete('/todos/:id', (req, res) => {
    const taskNumber = req.params.id;
    const removedTask = toDos.splice(taskNumber, 1);

    res.send(`Successfully deleted: "${removedTask}"`);
});

app.listen(3000, () => {
    console.log("The server is alive and listening on port 3000!");
});