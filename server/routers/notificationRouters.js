import express from 'express';

import { envoyerNotification, lireNotification, deleteNotification , voirNotification } from '../controllers/notificationController.js';
import { voirNotificationLu } from '../controllers/notificationController.js';
import { voirNotificationNonLu } from '../controllers/notificationController.js';
import { lireTouteNotification } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/envoyer',envoyerNotification)
router.post('/voir',voirNotification);
router.post('/delete',deleteNotification)
router.post('/lire',lireNotification)
router.post('/voir/lu',voirNotificationLu)
router.post('/voir/nonlu',voirNotificationNonLu)
router.post('/voir/tout',lireTouteNotification)

export default router;