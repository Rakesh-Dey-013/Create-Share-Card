import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    enum: ['birthday', 'proposal'],
    default: 'birthday'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    required: true,
  }
});

/**
 * MongoDB TTL:
 * Card will be deleted automatically when expiresAt < current time
 */

export default mongoose.model('Card', cardSchema);
