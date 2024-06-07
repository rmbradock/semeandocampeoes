import { db } from '../database/db.js'


// -----------------------------------    VERIFICAÇÃO DADOS LOGIN --PROFESSOR      ------------------------------------------------------------

export const verifyLoginProfessor = (req, res) => {
    const { usuario, senha } = req.body

    const sqlLoginProfessor = `select * from loginprofessor where usuario = ? and senha = ?`
    db.query(sqlLoginProfessor, [usuario, senha], function(err, data) {
        if(err){
            console.log("Erro ao adquerir dados de login")
            return res.status(500).json(err)
        }else{
            console.log("Dados de login adquiridos com sucesso")
            return res.status(200).json(data)
        }
    })
}


// -----------------------------------    VERIFICAÇÃO DADOS LOGIN --ALUNO      ------------------------------------------------------------

export const verifyLoginAluno = (req, res) => {
    const { usuario, senha } = req.body

    const sqlLoginProfessor = `select * from loginaluno where usuario = ? and senha = ?`
    db.query(sqlLoginProfessor, [usuario, senha], function(err, data) {
        if(err){
            console.log("Erro ao adquerir dados de login")
            return res.status(500).json(err)
        }else{
            console.log("Dados de login adquiridos com sucesso")
            return res.status(200).json(data)
        }
    })
}
