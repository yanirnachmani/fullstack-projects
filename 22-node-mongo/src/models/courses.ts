import { model } from "mongoose";
import { courseSchema } from "../schemas/courses";
import { ICourse } from "../interfaces/courses";

export const Course = model("Course", courseSchema);

export class CourseModel {
    static async createCourse(course: ICourse) {
        const newCourse = new Course(course);
        return await newCourse.save();
    }
}
