import mysql from 'mysql2'

export const db = mysql.createConnection({
    host:"localhost",
    port: "3306",
    user: "root",
    password:"admin",
    database: "semeando_campeoes"
})

db.connect((err) => {
    if(err){
        console.log(`Erro ao tentar se conectar com o banco de dados`)
        return
    }
    else{
        console.log("Conexão com o banco de dados bem sucedida!!")
    }
})