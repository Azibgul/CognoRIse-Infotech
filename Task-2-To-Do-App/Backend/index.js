import express from "express";


const app = express(); // Initialize Express app
// const cors = cors();


app.get('/', (req, res)=>{
    res.json("Server is ready")
})

app.use(express.json());
// app.use(cors());

    const todos = [
        {
            "id":1,
            "name": 'Hello',
            "completed":true
        },
        {
            "id":2,
            "name": 'How are you',
            "completed":false
        },
        {
            "id":3,
            "name": 'I am fine',
            "completed":true
        }
    ]

    app.get("/", (req, res) => {
        res.send("Todo List API Home Page");
      });
      
      app.get("/todos", (req, res) => {
        res.json(todos);
      });
      
      app.get("/todos/:id", (req, res) => {
        let todo = todos.filter((todo) => todo.id == req.params.id);
        res.json(todo);
      });
      
      app.post("/todos", (req, res) => {
        console.log(req.body);
        todos.push({ id: uuid.v4(), ...req.body });
        res.json(todos);
      });
      
      app.delete("/todos/:id", (req, res) => {
        let index = todos.findIndex((todo) => todo.id == req.params.id);
        todos.splice(index, 1);
        res.json(todos);
      });
      
      app.put("/todos/:id", (req, res) => {
        let todo = todos.find((todo) => todo.id == req.params.id);
        if (todo) {
          todo.desc = req.body.desc;
          todo.completed = req.body.completed;
          res.json(todos);
        } else {
          res.send("Todo with given id doesn't exist!");
        }
      });
      
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
