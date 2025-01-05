const express = require("express");
const db = require("./db");
const cors = require("cors");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.use(cors());


router.post('/register', async (req,res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);

    
    db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], (err) => {
        if(err){
            return res.status(500).json({message: 'User already exists.'});
        }
        res.status(201).json({message: `User ${username} registered successfully`});
    });
    
})

router.post('/login', (req, res) => {
    console.log("Login request body:", req.body);
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        const token = jwt.sign(
            { id: user.id, username: user.username },
            'your_secret_key',
            { expiresIn: '1h' }
        );
        res.json({ token });
    });
    
});


const authenticateToken = (req,res, next) =>{
    const authnHeader = req.headers['authorization'];
    const token = authnHeader && authnHeader.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Access denied'});

    jwt.verify(token, 'your_secret_key', (err,user) =>{
        if(err) return res.status(403).json({message: 'Invalid token'});
        req.user = user;
        next();
    })
}
router.get("/", authenticateToken, (req, res) => {
    const userId = req.user.id;
    db.all("SELECT * FROM todos WHERE user_id = ? ORDER BY priority DESC, duedate ASC", [userId], (err, rows) => {
        if (err) res.status(500).json({error: err.message});
        else res.json(rows);
    });
});

router.get("/date",authenticateToken, (req,res) => {
    const userId = req.user.id;
    db.all("SELECT * FROM todos WHERE duedate IS NOT NULL AND duedate != '' AND user_id = ? ORDER BY priority DESC, duedate ASC ", [userId], (err, rows) => {
        if (err){
            res.status(500).json({error: err.message});
            console.error("Error fetching data:", err);
        } 
        else res.json(rows);
    })
})

router.get("/:id", authenticateToken, (req, res) => {
    const id = req.params.id;
    const userId = req.user.id;
    db.get("SELECT * FROM todos WHERE id = ? AND user_id = ?", [id, userId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message }); 
        } else if (!row) {
            res.status(404).json({ error: "Todo not found" }); 
        } else {
            res.json(row); 
        }
    });
});


router.post("/", authenticateToken,(req, res) => {
    const userId = req.user.id;
    const {title, completed, priority, duedate, description} = req.body;
    console.log(req.body);

    if (!title || completed === undefined || priority === undefined) {
        return res.status(400).json({ error: "Missing required fields: title, completed, or priority" });
    }
    db.run("INSERT INTO todos (title, completed, priority, duedate, description, user_id) VALUES (?, ?, ?, ?, ?, ?)",
        [title, completed, priority, duedate,description, userId],
        function(err) {
            if(err) {
                return res.status(500).json({error: err.message});
            }else {
                return res.json({id: this.lastID, title, completed,duedate, priority, description});
            }
        })
})



router.delete("/:id", authenticateToken, (req,res) => {
    const id = req.params.id;
    const userId = req.user.id;
    db.run("DELETE FROM todos WHERE id = ? AND user_id = ?" , [id, userId],
        function(err) {
            if (err){
                return res.status(500).json({error:err.message});
            } else if(this.changes ===0){
                return res.status(404).json({message:"Todo not found or not authorized"});
            }
            else {
                return res.json({message:`Todo deleted: ${id}`});
            }
        }
    );
});

router.delete("/", authenticateToken,(req,res) => {
    const userId = req.user.id;
    db.run("DELETE FROM todos WHERE completed = ? AND user_id =?" ,[true, userId],
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

router.put("/:id", authenticateToken, (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;
    const {edit ,value} = req.body;

    db.run(`UPDATE todos SET ${edit} = ? WHERE id = ? AND user_id = ?`, [value, id, userId], 
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