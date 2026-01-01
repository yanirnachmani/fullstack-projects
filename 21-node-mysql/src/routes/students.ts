import { Router, Request, Response } from 'express';
import { insert } from '../controllers/students';

const router = Router();

// GET all students
router.get('/', (req: Request, res: Response) => {
  res.send('Get all students');
});

// GET one student by ID
router.get('/:id', (req: Request, res: Response) => {
  res.send(`Get student with ID ${req.params.id}`);
});

// POST a new student
router.post('/', async (req: Request, res: Response) => {
  try {
    // 1. Extract data from HTTP Request
    const { firstName, lastName, email, points } = req.body;

    // 2. Call the Controller (Business Logic)
    // The route doesn't know about the DB, it just asks the controller for data.
    const student = await insert(firstName, lastName, email, points);

    // 3. Send HTTP Response
    res.status(201).json(student);

  } catch (error: any) {
    // 4. Handle Errors
    console.error('Error in student route:', error.message);
    
    // Simple check to distinguish validation errors from server errors
    if (error.message.includes('Missing required fields')) {
        res.status(400).send(error.message);
    } else {
        res.status(500).send('Internal Server Error');
    }
  }
});

// PUT (update) a student
router.put('/:id', (req: Request, res: Response) => {
  res.send(`Update student with ID ${req.params.id}`);
});

// DELETE a student
router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Delete student with ID ${req.params.id}`);
});

export default router;