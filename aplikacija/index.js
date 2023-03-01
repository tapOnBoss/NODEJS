const mysql= require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
});

connection.connect((err) =>{
    if (err) {
        console.log('Error connecting to MySQL server:', err);
    } else {
        console.log('Connected to MySQL server');
    }
});