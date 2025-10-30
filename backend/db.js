import mysql from "mysql2"

const db = mysql.createConnection({
    host: 'photo-gallery-db.cbkecoy4abv6.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'database',
    database: 'photo_gallery'
});

db.connect((err)=>{
    if(err) {
        console.log("Connection Failed...");
    }
    else {
        console.log("Connection Successsfull");
    }
});

export default db;