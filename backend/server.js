import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import hetmet from 'helmet';
import connectDB from './src/config/db.js';

// Routes
import cardRoutes from './src/routes/cardRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));

app.use(hetmet());
app.use(morgan('dev'));
app.use(express.json());

// Database
connectDB();

// Routes
app.use('/api/cards', cardRoutes);


// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running at : http://localhost:${PORT}/health`);
});