const express = require("express");
const db = require("./db");
const cors = require("cors");
const router = express.Router();

router.use(cors());

router.get("/", (req, res) => {
    db.all("SELECT * FROM todos ORDER BY priority DESC, duedate ASC", [], (err, rows) => {
        if (err) res.status(500).json({error: err.message});
        else res.json(rows);
    });
});

router.post("/", (req, res) => {
    
    const {title, completed, priority, duedate, description} = req.body;
    console.log(req.body);

    if (!title || completed === undefined || priority === undefined) {
        return res.status(400).json({ error: "Missing required fields: title, completed, or priority" });
    }
    db.run("INSERT INTO todos (title, completed, priority, duedate, description) VALUES (?, ?, ?, ?, ?)",
        [title, completed, priority, duedate,description],
        function(err) {
            if(err) {
                return res.status(500).json({error: err.message});
            }else {
                return res.json({id: this.lastID, title, completed,duedate, priority, description});
            }
        })
})

router.get("/date", (req,res) => {
    db.all("SELECT * FROM todos WHERE duedate IS NOT NULL AND duedate != '' ORDER BY priority DESC, duedate ASC ", [], (err, rows) => {
        if (err){
            res.status(500).json({error: err.message});
            console.error("Error fetching data:", err);
        } 
        else res.json(rows);
    })
})

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    db.run("DELETE FROM todos WHERE id = ?", [id],
        function(err) {
            if (err){
                return res.status(500).json({error:err.message});
            }else {
                return res.json({message:`Todo deleted: ${id}`});
            }
        }
    );
});

router.delete("/", (req,res) => {
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

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const {edit ,value} = req.body;
    // const allowedFields = ["title", "priority", "completed"];
    // if(!allowedFields.includes(edit)){
    //     return res.status(400).json({error: "Invalid field specified for update"});
    // }
    db.run(`UPDATE todos SET ${edit} = ? WHERE id = ? `, [value, id], 
        function(err) {
            if(err) {
                return res.status(500).json({error:err.message});
            }else {
                return res.json({message: `${edit} of ${id} edited to ${value}`});
            }
        }
    );
});

module.exports = router;