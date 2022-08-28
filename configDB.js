const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("src/database/sqlite.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

db.serialize(() => {
    db.run("CREATE TABLE funcionarios (id INTEGER PRIMARY KEY, name VARCHAR(100))");
});

db.close();