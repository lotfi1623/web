import { ajouteContrat } from "../models/contratModel.js";
import { findEnseignant } from "../models/contratModel.js";
import { delethContrat } from "../models/contratModel.js";
import { findUser } from "../models/contratModel.js";
import { delethUser } from "../models/contratModel.js";
import { findEns } from "../models/contratModel.js";
import { delethEns } from "../models/contratModel.js";
import {findContratDateEnd} from "../models/contratModel.js";
import { sendEmail } from '../ResendService.js';

export const createContrat = async (req, res) => {
    try {
        const {idEnseignant, dateDebut , dateFin} = req.body;

        const ens = await findEnseignant(idEnseignant);
        if (!ens) {
            return res.status(404).json({message: "Enseignant not found"});
        }

        const enseignant = ens.users_id;
        await ajouteContrat(dateDebut, dateFin, enseignant);
        return res.send("added");
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const contratEnd = async (req, res) => {
    try {
      const contratEnd = await findContratDateEnd();
      if (!contratEnd) {
        return res.status(404).json({ message: "No contracts found" });
      }
      res.send(contratEnd);

      const idEns = contratEnd[1].idEnseignant;
      console.log(idEns);
      
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
  };