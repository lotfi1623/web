import express from 'express';
import {createContrat , contratEnd} from '../controllers/contratController.js';

const router = express.Router();


router.post('/ajouter',createContrat);
router.post('/end',contratEnd);

export default router;