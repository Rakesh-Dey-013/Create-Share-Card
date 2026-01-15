import express from 'express';
import { createCard, allCardData, singleCardData } from '../controllers/cardControllers.js';


const router = express.Router();

// Create card
router.post('/create', createCard);

// Get all cards
router.get('/', allCardData);

// Get single card by id
router.get('/:id', singleCardData);

export default router;