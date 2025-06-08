import db from '../db.js';


export const ajouteContrat = async (dateDebut , dateFin , idEnseignant) => {
    await db.query(`INSERT INTO contrat (dateDebut , dateFin , idEnseignant) VALUES ('${dateDebut}' , '${dateFin}' , '${idEnseignant}')`);
}


export const findEnseignant = async(idEnseignant) => {
    const [row] = await db.query(`SELECT * FROM enseignant WHERE users_id = '${idEnseignant}'`);
    return row;
}



export const delethContrat = async (heure) => {
    db.query(`DELETE FROM contrat WHERE dateFin = '${heure}'`)
}

export const findUser = async (id) => {
    const [row] = await db.query(`SELECT * FROM users WHERE users_id = '${id}'`);
    return row;
}

export const delethUser = async (id) => {
    db.query(`DELETE FROM users WHERE users_id = '${id}'`)
}


export const findEns = async (id) => {
    const [row] = await db.query(`SELECT * FROM enseignant WHERE users_id = '${id}'`);
    return row;
}

export const delethEns = async (id) => {
    db.query(`DELETE FROM enseignant WHERE users_id = '${id}'`)
}


export const findContratDateEnd = async() => {
    const [rows] = await db.query(`SELECT * FROM contrat WHERE dateFin = CURDATE()`);
    return rows;
}