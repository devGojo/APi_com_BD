import connection from "./connection.js";

export async function listarRegistro(){
    let sql2 = 'select * from TB_REGIS';
    let resp = await connection.query(sql2);
    let dados = resp[0];

    return dados;
}


export async function inserir(RESGISTRO) {
    let sql2 = 'insert into TB_REGIS (NM_NOME, DS_EMAIL, DS_TELEFONE, DS_CPF, NR_CNH ) values (?, ?, ?, ?, ?)';

    let resp = await connection.query(sql2, [RESGISTRO.nome, RESGISTRO.FAVORITO]);
    let dados = resp[0];

    RESGISTRO.id = dados.insertId;
    return RESGISTRO;
}