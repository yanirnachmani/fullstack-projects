import { Student } from '../models/students';

// Notice: No Request or Response types here. Just pure data.
export const insert = async (
  firstName: string,
  lastName: string,
  email: string,
  points?: number
) => {

  // 1. Business Logic / Validation
  // We throw errors here, and let the Route catch them
  if (!firstName || !lastName || !email) {
    throw new Error('Missing required fields: firstName, lastName, or email');
  }

  // 2. Create Model Instance
  const newStudent = new Student(firstName, lastName, email, points);

  // 3. Interact with DB via Model
  const savedStudent = await newStudent.insert();


  // 4. Return the pure data object
  return savedStudent;
};

export const getAll = async () => {
  const students = await Student.selectAll();
  const studentsWithGrade = students.map((student) => {
    return {
      firstName: student.first_name,
      lastName: student.last_name,
      points: student.points < 50 ? 'Needs Improvement' : 'Good',
    };
  });

  return studentsWithGrade;
};

export const getById = async (id: number) => {
  return await Student.selectById(id);
};

export const update = async (id: number, data: any) => {
  // Basic validation could be added here
  await Student.update(id, data);
  return await Student.selectById(id);
};

export const remove = async (id: number) => {
  await Student.delete(id);
};

export const enroll = async (studentId: number, courseIds: number[]) => {
  if (!Array.isArray(courseIds) || courseIds.length === 0) {
    throw new Error('courseIds must be a non-empty array');
  }
  await Student.enroll(studentId, courseIds);
  return { message: 'Enrollment successful' };
};

export const getStudentCourses = async (studentId: number) => {
  return await Student.getCourses(studentId);
};













