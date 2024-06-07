export interface Participante{

    id: number
    nome: string
    data_de_nascimento: string
    telefone: string
    responsavel: string

    nome_cidade: string
    bairro: string
    rua: string
    numero: string

    centro_de_treinamento: number
    cor_da_faixa: number
    
    fid: number
    cdtid: number
}  

export interface Cidade{
    nome_cidade: string
}


