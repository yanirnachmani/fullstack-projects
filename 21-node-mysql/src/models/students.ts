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
}