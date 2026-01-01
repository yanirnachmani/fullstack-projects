import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

// Import the routers
import studentsRouter from './routes/students';
import coursesRouter from './routes/courses';

// Initialize configuration
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Health Check Route (Optional but recommended)
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Server is healthy');
});

// --- Register Routers ---
app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});