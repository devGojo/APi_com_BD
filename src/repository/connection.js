import mysql2 from 'mysql2/promise'

const connection = await mysql2.createConnection({
   host: process.env.HOST ,
   user: process.env.USER ,
   password: process.env.PWD ,
   database: process.env.DB
})

console.log('BD Conectado');

export default connection;
