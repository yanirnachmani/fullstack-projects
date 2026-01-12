import axios from "axios";
import { ICourse } from "../interfaces/courses";
import { CourseModel } from "../models/courses";

export class CourseController {
    static async createCourse(course: ICourse) {
        const newCourse = await CourseModel.createCourse(course);

        // Sync to MySQL service
        try {
            if (process.env.MYSQL_SERVICE_URL) {
                await axios.post(`${process.env.MYSQL_SERVICE_URL}/courses`, {
                    name: course.title,
                    description: course.description
                });
                console.log('Successfully synced course to MySQL service');
            }
        } catch (error) {
            console.error('Failed to sync course to MySQL service:', error);
        }

        return newCourse;
    }
}