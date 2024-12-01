const express = require("express");
const db = require("./db");
const router = express.Router();

router.get("/todos", (req, res) => {
    db.all("SELECT * FROM todos", [], (err, rows) => {
        if (err) res.status(500).json({error: err.message});
        else res.json(rows);
    });
});

router.post("/toods", (req, res) => {
    const todo = req.body;
    const {title, completed, priority} = todo;
    db.run("INSERT TODO todos (title, completed, priority) VALUES (?, ?, ?)"),
        [title, completed, priority],
        function(err) {
            if(err) {
                return res.status(500).json({error: err.message});
            }else {
                return res.json({id: this.lastID, title, completed, priority});
            }
        }
})

router.delete("/todos/:id", (req,res) => {
    const id = req.params;
    db.run("DELETE FROM todos WHERE id = ?", [id],
        function(err) {
            if (err){
                return res.status(500).json({error:err.message});
            }else {
                return res.json({message:"Todo deleted", id});
            }
        }
    );
});

router.delete("/todos/", (req,res) => {
    db.run("DELETE FROM todos WHERE completed = ?" ,[true],
        function(err) {
            if(err) {
                return res.status(500).json({error:err.message});
            }else {
                const deletedCount = this.changes;
                return res.json({message:`${deletedCount} completed todos deleted`});
            }
        }
    );
});

router.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    const {edit} = req.body;
    db.run("UPDATE todos SET ")
})