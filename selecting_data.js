// Selecting Data

const { faker } = require('@faker-js/faker');

var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'join_us'
});

var q = 'select count(*) as total from users';

connection.query(q, function (error, results, fields) {
   if (error) throw error;
   console.log(results[0].total);
});

connection.end();
