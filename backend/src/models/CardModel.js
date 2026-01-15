import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0 // TTL index uses expiresAt directly
  }
});

/**
 * MongoDB TTL:
 * Card will be deleted automatically when expiresAt < current time
 */

const cardModel = mongoose.model("Card", cardSchema);
export default cardModel;
