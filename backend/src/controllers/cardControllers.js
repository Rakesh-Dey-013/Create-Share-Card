import cardModel from '../models/CardModel.js';
import { getRemainingTime } from '../utils/timeUtils.js';

// Create card --->
export const createCard = async (req, res) => {
    try {
        const { name, message } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const createdAt = new Date();
        const expiresAt = new Date(createdAt.getTime() + 24 * 60 * 60 * 1000); // +24h

        const createdCard = await cardModel.create({
            name,
            message,
            createdAt,
            expiresAt
        });

        console.log('Card created successfully.');

        res.status(201).json({
            success: true,
            message: 'Card created successfully',
            data: createdCard
        });


    } catch (error) {
        console.error('Error creating card:', error);
        res.status(500).json({ message: 'Server error while creating card' });
    }
};


//  Get all card data --->
export const allCardData = async (req, res) => {
  try {
    const cards = await cardModel.find().sort({ createdAt: -1 });

    const cardsWithCountdown = cards.map(card => ({
      ...card.toObject(),
      remainingTimeMs: getRemainingTime(card.expiresAt)
    }));

    res.status(200).json(cardsWithCountdown);

  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ message: 'Server error while fetching cards' });
  }
};


// Get a single card by ID
export const singleCardData = async (req, res) => {
  try {
    const { id } = req.params;

    const card = await cardModel.findById(id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found or expired' });
    }

    res.status(200).json({
      ...card.toObject(),
      remainingTimeMs: getRemainingTime(card.expiresAt)
    });

  } catch (error) {
    console.error('Error fetching card:', error);
    res.status(500).json({ message: 'Failed to fetch card' });
  }
};