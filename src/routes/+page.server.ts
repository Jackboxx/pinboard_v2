import mysql from 'mysql2';

const connection = mysql.createConnection(import.meta.env.VITE_DATABASE_URL);
connection.end();
