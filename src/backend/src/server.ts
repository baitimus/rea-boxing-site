import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDatabase();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Auth routes
app.use('/api/auth', authRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
