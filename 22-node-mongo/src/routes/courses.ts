import { Router } from "express";
import { CourseController } from "../controllers/courses";


const courseRouter = Router();


courseRouter.get('/', (req, res) => {
    res.send('Courses');
});


courseRouter.post('/', (req, res) => {
    const { title, description, price, image, category } = req.body;
    const result = CourseController.createCourse({ title, description, price, image, category });
    res.send(result);
});
export default courseRouter;
