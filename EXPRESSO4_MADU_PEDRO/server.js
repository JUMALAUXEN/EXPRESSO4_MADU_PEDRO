//como carregar do mysql através de arquivo externo

const express = require ('express')
const mysql = require ('mysql2');
const { listenerCount } = require('process');

const mysql_config = require ('./mysql_config')

const app = express()
app;listener(3000,()=>{
    console.log("Servidor em execução")

})

const connection = mysql.createConnection(mysql_config)