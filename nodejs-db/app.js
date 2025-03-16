// declare variables
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to database
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});


/*create table 
sql = `CREATE TABLE bands(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    genre TEXT NOT NULL
)`;
db.run(sql);*/

/* insert data - one at a time 
sql = `INSERT INTO bands (name, genre) VALUES (?, ?)`;
db.run(sql, 
    ['bring me the horizon', 'alternative metal, metalcore'],
    (err) => {
    if (err) return console.error(err.message);
})*/

//insert data - multiple at a time
/*db.serialize(() => {
    
    sql = `INSERT INTO bands (name, genre) VALUES (?, ?)`; 
    const bands = [
        ['architects', 'metalcore'],
        ['spiritbox', 'alternative metal, progressive metal, metalcore'],
        ['a day to remember', 'metalcore, pop punk'],
        ['deftones', 'alternative metal, nu metal'],
        ['linkin park', 'nu metal, alternative metal'],
        ['slipknot', 'nu metal, alternative metal']
    ];

    bands.forEach(
        (band) => {
            db.run(sql, band, (err) => {
                if (err) return console.error(err.message);
            })
        }
    )


});*/

/*//update data
sql = `UPDATE bands SET genre = ? WHERE id = ?`;
    db.run(sql, ['contry', 1], (err) => {
        if (err) return console.error(err.message);
    });
*/

//delete data
sql = `DELETE FROM bands WHERE id= ?`;
    db.run(sql, [1], (err) => {
    if (err) return console.error(err.message);
});



//query data 
sql = `SELECT * FROM bands`;
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row.id, row.name, row.genre);
    });
});
