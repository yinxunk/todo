const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./todos.db", (err) => {
    if (err) console.error("Database error:", err);
    else console.log("Connected to SQLite database");

})


db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL)`, (err) => {
    if(err){
        console.error("Error creating users table:", err.message );
    }else {
        console.log("Users table created or already exists");
    }
});
db.run(`CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed BOOLEAN, priority INTEGER CHECK(priority >= 1 AND priority <= 4), duedate TEXT, description TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id))`);

module.exports = db;

