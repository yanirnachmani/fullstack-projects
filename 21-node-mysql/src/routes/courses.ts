import { Router, Request, Response } from 'express';
import { create, getAll, getById, update, remove } from '../controllers/courses';

const router = Router();

// GET all courses
router.get('/', async (req: Request, res: Response) => {
  try {
    const courses = await getAll();
    res.json(courses);
  } catch (error) {
    res.status(500).send('Error fetching courses');
  }
});

// GET one course by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const course = await getById(Number(req.params.id));
    if (course) {
      res.json(course);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching course');
  }
});

// POST a new course
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const course = await create(name, description);
    res.status(201).json(course);
  } catch (error: any) {
    if (error.message.includes('Missing required field')) {
      res.status(400).send(error.message);
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
});

// PUT (update) a course
router.put('/:id', async (req: Request, res: Response) => {
  try {
    await update(Number(req.params.id), req.body);
    const updatedCourse = await getById(Number(req.params.id));
    if (updatedCourse) {
      res.json(updatedCourse);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    res.status(500).send('Error updating course');
  }
});

// DELETE a course
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Error deleting course');
  }
});

export default router;