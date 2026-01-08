import { Course } from '../models/courses';

export const create = async (name: string, description: string) => {
    if (!name) {
        throw new Error('Missing required field: name');
    }
    const id = await Course.insert(name, description);
    return await Course.selectById(id);
};

export const getAll = async () => {
    return await Course.selectAll();
};

export const getById = async (id: number) => {
    return await Course.selectById(id);
};

export const update = async (id: number, data: any) => {
    await Course.update(id, data);
    return await Course.selectById(id);
};

export const remove = async (id: number) => {
    await Course.delete(id);
};
