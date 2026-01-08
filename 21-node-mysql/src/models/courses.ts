import pool from '../db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export interface CourseData extends RowDataPacket {
    id: number;
    name: string;
    description: string;
}

export class Course {
    public static async insert(name: string, description: string): Promise<number> {
        const query = 'INSERT INTO courses (name, description) VALUES (?, ?)';
        const [result] = await pool.execute<ResultSetHeader>(query, [name, description]);
        return result.insertId;
    }

    public static async selectAll(): Promise<CourseData[]> {
        const query = 'SELECT * FROM courses';
        const [rows] = await pool.execute<CourseData[]>(query);
        return rows;
    }

    public static async selectById(id: number): Promise<CourseData | null> {
        const query = 'SELECT * FROM courses WHERE id = ?';
        const [rows] = await pool.execute<CourseData[]>(query, [id]);
        return rows.length > 0 ? rows[0] : null;
    }

    public static async update(id: number, data: Partial<Omit<CourseData, 'id'>>): Promise<void> {
        const fields = Object.keys(data)
            .map((key) => `${key} = ?`)
            .join(', ');

        if (!fields) return;

        const values = [...Object.values(data), id];
        const query = `UPDATE courses SET ${fields} WHERE id = ?`;

        await pool.execute(query, values);
    }

    public static async delete(id: number): Promise<void> {
        const query = 'DELETE FROM courses WHERE id = ?';
        await pool.execute(query, [id]);
    }
}
