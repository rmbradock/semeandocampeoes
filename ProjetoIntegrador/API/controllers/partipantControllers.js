import { db } from '../database/db.js'

export const getUsers = (_, res) => {
    const sql =
// `select a.id as id,
// p.nome as nome,
// p.data_de_nascimento as data_de_nascimento,
// p.telefone as telefone,
// p.responsavel as responsavel,
// ct.nome as centro_treino,
// f.cor_da_faixa as faixa
// from pessoa p 
// left join professor pf on p.id = pf.id_pessoa
// left join aluno a on p.id = a.id_pessoa
// left join faixa f on a.id_faixa = f.id 
// left join centro_de_treinamento ct on p.id_centro_de_treinamento = ct.id`


//   `SELECT 
//      CASE 
//          WHEN a.id IS NULL THEN pf.id
//          WHEN pf.id IS NULL THEN a.id
//          ELSE a.id  -- ou pf.id,
//      END AS id,
//      p.nome AS nome,
//      p.data_de_nascimento AS data_de_nascimento,
//      p.telefone AS telefone,
//      p.responsavel AS responsavel,
//      ct.nome AS centro_treino,
//      CASE 
//          WHEN f.cor_da_faixa IS NULL THEN ff.cor_da_faixa
//          WHEN ff.cor_da_faixa IS NULL THEN f.cor_da_faixa
//          ELSE f.cor_da_faixa  -- ou ff.cor_da_faixa,
//      END AS faixa
//  FROM 
//      pessoa p 
//  LEFT JOIN 
//      professor pf ON p.id = pf.id_pessoa
//  LEFT JOIN 
//      aluno a ON p.id = a.id_pessoa
//  LEFT JOIN 
//      faixa f ON a.id_faixa = f.id
//  LEFT JOIN 
//      faixa ff ON pf.id_faixa = ff.id
//  JOIN 
//      centro_de_treinamento ct ON p.id_centro_de_treinamento = ct.id
//  `

`
select p.id,
f.id as fid,
cdt.id as cdtid,
p.nome,
p.data_de_nascimento,
p.telefone, p.responsavel,
cdt.nome as centro_de_treinamento,
f.cor_da_faixa,
e.bairro,
e.rua,
e.numero,
c.nome_cidade
 from participante p
 join centro_de_treinamento cdt 
 	on p.id_centro_de_treinamento = cdt.id
 join endereco e
 	on p.id_endereco = e.id
 join cidade c 
 	on e.id_cidade = c.id
 join faixa f
 	on p.id_faixa = f.id
order by p.nome
`

    db.query (sql, (err, data)=> {
        if(err){
            console.log("Erro ao processar a requisição.", err)
            return res.status(500).json(data)
        }
        else{
            console.log("Dados dos usuários obtidos com sucesso.")
            return res.status(200).json(data)
        }
    })
}

// -----------------------------------    ADD PARTICIPANTE      ------------------------------------------------------------

export const addUsers = (req, res) => {
        const { nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_faixa, rua, numero, bairro, nome_cidade } = req.body

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

            const sqlPessoa = `insert into participante (nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_faixa, id_endereco) values (?, ?, ?, ?, ?, ?, ?)`
            db.query(sqlPessoa, [nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_faixa, enderecoId], function(err, resultPessoa) {
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

// -----------------------------------    UPDATE PARTICIPANTE      ------------------------------------------------------------

export const updateUsers = (req, res) => {
    const sqlPessoa =
    `
    update participante p
    join endereco e 
 	    on p.id_endereco = e.id
    join cidade c 
 	    on e.id_cidade = c.id
    set p.nome = ?,
    p.data_de_nascimento = ?,
    p.telefone = ?,
    p.responsavel = ?,
    p.id_centro_de_treinamento = ?,
    p.id_faixa = ?,
    e.bairro = ?,
    e.rua = ?,
    e.numero = ?,
    c.nome_cidade = ?
    where p.id = ?
    `

    const {nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_faixa, bairro, rua, numero, nome_cidade, id} = req.body


    db.query(sqlPessoa, [nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_faixa, bairro, rua, numero, nome_cidade, id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        }
        else{
            console.log("Dados do usuário alterados com sucesso")
            return res.status(200).json(data)
        }
    })
}



// -----------------------------------    REMOVE PARTICIPANTE     ------------------------------------------------------------

export const deleteUsers = (req, res) => {
    const sql = "delete from participante where id = ?"

    const { id } = req.query

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        }
        else{
            console.log("Dados do usuário removidos com sucesso")
            return res.status(200).json(data)
        }
    })
}