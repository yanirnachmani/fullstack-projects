import { Router, Request, Response } from 'express';
import { insert, getAll, getById, update, remove, enroll, getStudentCourses } from '../controllers/students';

const router = Router();

// GET all students
router.get('/', async (req: Request, res: Response) => {
  try {
    const students = await getAll();
    res.json(students);
  } catch (error) {
    res.status(500).send('Error fetching students');
  }
});

// GET one student by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const student = await getById(Number(req.params.id));
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching student');
  }
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
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedStudent = await update(Number(req.params.id), req.body);
    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).send('Error updating student');
  }
});

// DELETE a student
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Error deleting student');
  }
});

// POST enroll student in courses
router.post('/:id/courses', async (req: Request, res: Response) => {
  try {
    const { courseIds } = req.body;
    await enroll(Number(req.params.id), courseIds);
    res.status(200).send('Enrollment successful');
  } catch (error: any) {
    res.status(500).send(error.message || 'Error enrolling student');
  }
});

// GET all courses for a student
router.get('/:id/courses', async (req: Request, res: Response) => {
  try {
    const courses = await getStudentCourses(Number(req.params.id));
    res.json(courses);
  } catch (error) {
    res.status(500).send('Error fetching student courses');
  }
});

export default router;