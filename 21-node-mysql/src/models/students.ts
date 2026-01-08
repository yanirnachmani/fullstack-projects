import pool from '../db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

// Define an interface for the data returned from the DB
// This helps TypeScript understand the shape of the rows
export interface StudentData extends RowDataPacket {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  points: number;
}

export class Student {
  private id?: number; // ID is optional because it's not assigned until after insertion
  private firstName: string;
  private lastName: string;
  private email: string;
  private points?: number;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    points?: number,
    id?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.points = points;
    this.id = id;
  }

  // --- Database Methods ---

  /**
   * Inserts the current Student instance into the database.
   * As per the image, the Model handles the DB interaction.
   */
  public async insert(): Promise<Student> {
    const query = `
      INSERT INTO students (first_name, last_name, email, points)
      VALUES (?, ?, ?, ?)
    `;

    // Use 0 if points is not provided
    const values = [this.firstName, this.lastName, this.email, this.points || 0];

    try {
      // execute<ResultSetHeader> tells TypeScript that the result of an INSERT
      // will be a header object containing 'insertId', not an array of rows.
      const [result] = await pool.execute<ResultSetHeader>(query, values);

      // Set the newly assigned ID to the instance
      this.id = result.insertId;

      // Return the current instance, now with its ID
      return this;
    } catch (error) {
      // Log the error and re-throw it to be handled by the Controller
      console.error('Error executing student insert query:', error);
      throw error;
    }
  }

  /**
   * Retrieves all students from the database.
   */
  public static async selectAll(): Promise<StudentData[]> {
    const query = 'SELECT * FROM students';
    const [rows] = await pool.execute<StudentData[]>(query);
    return rows;
  }

  /**
   * Retrieves a student by ID.
   */
  public static async selectById(id: number): Promise<StudentData | null> {
    const query = 'SELECT * FROM students WHERE id = ?';
    const [rows] = await pool.execute<StudentData[]>(query, [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  /**
   * Updates a student's information.
   */
  public static async update(id: number, data: Partial<StudentData>): Promise<void> {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(', ');

    if (!fields) return;

    const values = [...Object.values(data), id];
    const query = `UPDATE students SET ${fields} WHERE id = ?`;

    await pool.execute(query, values);
  }

  /**
   * Deletes a student by ID.
   */
  public static async delete(id: number): Promise<void> {
    const query = 'DELETE FROM students WHERE id = ?';
    await pool.execute(query, [id]);
  }

  /**
   * Enrolls a student in multiple courses.
   */
  public static async enroll(studentId: number, courseIds: number[]): Promise<void> {
    const query = 'INSERT INTO students_courses (student_id, course_id) VALUES (?, ?)';

    // Using a loop for simplicity. For bulk inserts, a dynamic query could be built.
    // Using Promise.all to run them in parallel
    const promises = courseIds.map(courseId => pool.execute(query, [studentId, courseId]));
    await Promise.all(promises);
  }

  /**
   * Retrieves all courses a student is enrolled in.
   */
  public static async getCourses(studentId: number): Promise<RowDataPacket[]> {
    const query = `
      SELECT c.* 
      FROM courses c 
      JOIN students_courses sc ON c.id = sc.course_id 
      WHERE sc.student_id = ?
    `;
    const [rows] = await pool.execute<RowDataPacket[]>(query, [studentId]);
    return rows;
  }
}




