import db from '../db.js';

export const insertUser = async (idUnniverite,idFaculte,emailUser, mdpUser) => {
    await db.query(`INSERT INTO users (idUnniversité, idFaculté, Email, Password) VALUES ('${idUnniverite}', '${idFaculte}', '${emailUser}', '${mdpUser}')`);
}

export const findUser = async (emailUser) => {
    const [rows] = await db.query(`SELECT * FROM users WHERE Email = '${emailUser}'`);
    return rows;
}
export const findUs = async (emailUser) => {
    const [rows] = await db.query(`SELECT * FROM users WHERE Email = '${emailUser}'`);
    return rows[0];
}

export const findUnniversite = async(nomUnniversite) => {
    const [rows] = await db.query(`SELECT * FROM unniversite WHERE NomUnniversite = '${nomUnniversite}'`);
    console.log(rows)
    return rows[0]
}

export const findFaculte = async(nomFaculte) => {
    const [rows] = await db.query(`SELECT * FROM faculté WHERE nomFaculté = '${nomFaculte}'`);
    console.log(rows)
    return rows[0]; 
}
export const findfind = async (email) => {
    const [rows] = await db.query(`SELECT users_id,idUnniversité,idFaculté FROM users WHERE Email = '${email}'`);
    return rows;
}