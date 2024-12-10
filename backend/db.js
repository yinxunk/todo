const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./todos.db", (err) => {
    if (err) console.error("Database error:", err);
    else console.log("Connected to SQLite database");

})



db.run(`CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed BOOLEAN, priority INTEGER CHECK(priority >= 1 AND priority <= 4), duedate TEXT, description TEXT)`);

module.exports = db;