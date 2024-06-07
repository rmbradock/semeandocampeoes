import { db } from '../database/db.js'

// ----------------------------    FILTROS PARA BUSCAR PARTICIPANTES      ---------------------------------------------

export const filterParticipantes = (req, res) => {
    let comboFilters =
    `
    select
    p.id,
    f.id as fid,
    ct.id as cdtid,
    p.nome,
    p.data_de_nascimento,
    p.telefone,
    p.responsavel,
    ct.nome as centro_de_treinamento,
    f.cor_da_faixa,
    e.bairro,
    e.rua,
    e.numero,
    c.nome_cidade
    from participante p
    join faixa f 
        on p.id_faixa = f.id 
    join centro_de_treinamento ct 
        on p.id_centro_de_treinamento = ct.id 
    join endereco e 
        on p.id_endereco = e.id
    join cidade c 
        on e.id_cidade = c.id
    where 1 = 1
    `

    const params = []

    // Filtrar nome -->
    if (req.query.nome) {
        comboFilters += " and p.nome like ?"
        params.push(`%${req.query.nome}%`)
    }

    // Filtrar cor de faixa -->
    if (req.query.cor_da_faixa) {
        // console.log(req.query.cor_da_faixa[0])
        // console.log(req.query.cor_da_faixa[1])
        // console.log(req.query.cor_da_faixa.length)

        if (req.query.cor_da_faixa.length > 1) {
            console.log(req.query.cor_da_faixa.length)
            comboFilters += ` and f.cor_da_faixa like '${req.query.cor_da_faixa[0]}%'`

            params.push(`${req.query.cor_da_faixa[0]}%`)
    
            for (var i = 1; i < req.query.cor_da_faixa.length; i++) {
                // console.log(req.query.cor_da_faixa[i])
    
                params.push(`${req.query.cor_da_faixa[i]}%`)
    
                comboFilters += ` or f.cor_da_faixa like '${req.query.cor_da_faixa[i]}%'`
            }
        } else if(req.query.cor_da_faixa.length == 1){
            comboFilters += ` and f.cor_da_faixa like '${req.query.cor_da_faixa[0]}%'`
            params.push(`${req.query.cor_da_faixa[0]}%`)
        }
        else{
            comboFilters += ` and f.cor_da_faixa like '%%'`
            params.push(`${req.query.cor_da_faixa[0]}%`)

        console.log(comboFilters)
        
    }
}

    // Filtrar centro de treinamento -->
    if (req.query.centro_de_treino) {
        if (req.query.centro_de_treino.length > 1) {
            comboFilters += ` and ct.nome like '%${req.query.centro_de_treino[0]}%'`

            params.push(`%${req.query.centro_de_treino[0]}%`)
    
            for (var i = 1; i < req.query.centro_de_treino.length; i++) {
                // console.log(req.query.cor_da_faixa[i])
    
                params.push(`%${req.query.centro_de_treino[i]}%`)
    
                comboFilters += ` or ct.nome like '${req.query.centro_de_treino[i]}'`
            }
        } else if(req.query.centro_de_treino.length == 1){
            comboFilters += ` and ct.nome like '%${req.query.centro_de_treino[0]}%'`
            params.push(`%${req.query.centro_de_treino[0]}%`)
        }
        else{
            comboFilters += ` and ct.nome like '%%'`
            params.push(`%${req.query.centro_de_treino[0]}%`)
        }
        console.log(comboFilters)
    }

    db.query(comboFilters, params, (err, data) => {
        if (err) {
            console.log("Erro ao buscar participante(s)")
            return res.status(500).json(err)
        } else {
            console.log("Participante(s) filtrados com sucesso")
            return res.status(200).json(data)
        }
    })
}