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