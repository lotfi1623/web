import db from "../db.js";

export const createNotification = async (idEnseignant, idChef, message, type, lire, date) => {
  await db.query(
    `INSERT INTO notification (idEnseignant, idChef, message, type, lire, dateCreation)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [idEnseignant, idChef, message, type, lire, date]
  );
};

export const showNotification = async (idEnseignant) => {
  const [rows] = await db.query(
    `SELECT * FROM notification WHERE idEnseignant = '${idEnseignant}' ORDER BY dateCreation DESC`
  )
  return rows;
};

export const supprimerNotification = async (idNotification) => {
  await db.query(`DELETE FROM notification WHERE idNotification = '${idNotification}'`);
};

export const findEnseignant = async (idEnseignant) => {
  const [rows] = await db.query(
    `SELECT * FROM enseignant WHERE users_id = '${idEnseignant}'`
  );
  return rows[0]; 
};

export const findChef = async (idDepartement) => {
  const [rows] = await db.query(
    `SELECT c.users_id FROM chef c
     JOIN enseignant e ON c.users_id = e.users_id
     WHERE e.idDepartement = '${idDepartement}'`
  );
  return rows[0]; 
};



export const notificationLire = async (idNotification) => {
    await db.query(`UPDATE notification SET lire = 1 WHERE idNotification = '${idNotification}'`);
}



export const notificationNonLu = async (idEnseignant) => {
    const [rows] = await db.query(
        `SELECT * FROM notification WHERE idEnseignant = '${idEnseignant}' AND lire = 0 ORDER BY dateCreation DESC`
    );
    return rows
};

export const notificationLu = async (idEnseignant) => {
    const [rows] = await db.query(
        `SELECT * FROM notification WHERE idEnseignant = '${idEnseignant}' AND lire = 1 ORDER BY dateCreation DESC`
    );
    return rows
};

export const LuTouteNotification = async (idEnseignant) => {
    await db.query(`UPDATE notification SET lire = 1 WHERE idEnseignant = '${idEnseignant}'`);
}
