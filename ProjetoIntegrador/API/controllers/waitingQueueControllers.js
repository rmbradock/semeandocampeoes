import { db } from "../database/db.js"



// -----------------------------------    ADIÇÃO DE DADOS NA FILA DE ESPERA      ------------------------------------------------------------

export const feedingQueue = (req, res) => {
    const { nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_faixa, rua, numero, bairro, nome_cidade} = req.body

    const sqlCidade = `insert into cidade (nome_cidade) values (?)`
    db.query(sqlCidade, [nome_cidade], function(err, resultCidade) {
        if (err) {
            console.log("Erro ao inserir na tabela cidade:", err)
            return res.status(500).json({ error: "Erro ao processar a requisição" })
        }

        const cidadeId = resultCidade.insertId

        const sqlEndereco = `insert into endereco (id_cidade, rua, numero, bairro) values (?, ?, ?, ?)`
        db.query(sqlEndereco, [cidadeId, rua, numero, bairro], function(err, resultEndereco) {
            if (err) { 
                console.log("Erro ao inserir na tabela endereco:", err)
                return res.status(500).json({ error: "Erro ao processar a requisição" })
            }

            const enderecoId = resultEndereco.insertId

            const sqlPessoa = `insert into fila_de_espera (nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco, id_faixa) values (?, ?, ?, ?, ?, ?, ?)`
            db.query(sqlPessoa, [nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, enderecoId, id_faixa], function(err, resultPessoa) {
                if (err) { 
                    console.log("Erro ao inserir na tabela pessoa:", err)
                    return res.status(500).json({ error: "Erro ao processar a requisição" })
                }

                console.log("Requisição bem sucedida!")
                return res.status(201).json({ pessoaId: resultPessoa.insertId, enderecoId, cidadeId })
            })
        })
    })
}