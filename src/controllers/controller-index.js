const { Pool } = require('pg');
var fs = require('fs');

const pool = new Pool({
    host: '157.90.181.209',
    user: 'pitscourier_postgres',
    password: '!agrc5i5!!',
    database: 'pitscourier_basenexdemo',
    port: '5432'
});

/*const pool = new Pool({
    host: 'ec2-23-20-73-25.compute-1.amazonaws.com',
    user: 'kbnomnuqdszmtf',
    password: '6ebc664437b308291ed9d7e4d8a8612e519682d45776645e073de413db218389',
    database: 'ddvo1m66j4htnd',
    port: '5432',
    ssl : true,
}); 
*/


const get = (req, res) =>{
    res.send('Welcome to my API!');
}

const getPersonal = async(req, res) =>{
    const resp = await pool.query('SELECT correo, password from pitscourier_basenexdemo.public.personal');
    //const resp = await pool.query('SELECT * FROM pitscurierheroku2.public.personal');
    res.status(200).json(resp.rows);
};


module.exports = {
    getPersonal,
    get

};
