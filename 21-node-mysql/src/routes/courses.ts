import { Router, Request, Response } from 'express';

const router = Router();

// GET all courses
router.get('/', (req: Request, res: Response) => {
  res.send('Get all courses');
});

// GET one course by ID
router.get('/:id', (req: Request, res: Response) => {
  res.send(`Get course with ID ${req.params.id}`);
});

// POST a new course
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new course');
});

// PUT (update) a course
router.put('/:id', (req: Request, res: Response) => {
  res.send(`Update course with ID ${req.params.id}`);
});

// DELETE a course
router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Delete course with ID ${req.params.id}`);
});

export default router;