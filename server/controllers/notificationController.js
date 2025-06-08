import c from "config";
import { createNotification } from "../models/notificationModel.js";
import { showNotification } from "../models/notificationModel.js";
import { supprimerNotification } from "../models/notificationModel.js";
import { findEnseignant } from "../models/notificationModel.js";
import { findChef } from "../models/notificationModel.js";
import { notificationLire } from "../models/notificationModel.js";
import { notificationNonLu } from "../models/notificationModel.js";
import { notificationLu } from "../models/notificationModel.js";
import { LuTouteNotification } from "../models/notificationModel.js";



export const envoyerNotification = async (req, res) => {
    try {
      const { idEnseignant, message, type } = req.body;
      const d = new Date();
      const date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  
      const user = await findEnseignant(idEnseignant);
      if (!user) {
        return res.status(404).json({ message: "Enseignant not found" });
      }
  
      const idDepartement = user.idDepartement;
      const Chef = await findChef(idDepartement);
      
      if (!Chef) {
        return res.status(404).json({ message: "Chef not found" });
      }
  
      const idChef = Chef.users_id;
      console.log("Chef ID:", idChef);
  
      await createNotification(idEnseignant, idChef, message, type, 0, date);
      return res.status(200).json({ message: "Notification sent" });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  


export const voirNotification = async (req, res) => {
    try{
        const { idEnseignant } = req.body;
        const notification = await showNotification(idEnseignant);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        
        res.send(notification) 

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const deleteNotification = async (req, res) => {
    try{
        const { idNotification } = req.body;
        await supprimerNotification(idNotification);
        res.status(200).json({ message: "Notification deleted" });

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const lireNotification = async (req, res) => {
    try{
        const {idNotification} = req.body;
        await notificationLire(idNotification);
        res.status(200).json({ message: "Notification marked as read" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const voirNotificationLu = async (req, res) => {
    try{
        const {idEnseignant} = req.body;
        const notification = await notificationLu(idEnseignant);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        
        res.send(notification) 

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const voirNotificationNonLu = async (req, res) => {
    try{
        const {idEnseignant} = req.body;
        const notification = await notificationNonLu(idEnseignant);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        
        res.send(notification) 

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const lireTouteNotification = async (req, res) => {
    try{
        const {idEnseignant} = req.body;
        await LuTouteNotification(idEnseignant);
        res.status(200).json({ message: "All notifications marked as read" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
