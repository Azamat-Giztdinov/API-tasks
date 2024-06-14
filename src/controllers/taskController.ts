import { Request, Response } from 'express';
import { Task } from '../models';

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  if (!title || title.length < 3) {
    return res.status(400).json({ error: 'Title is required and must be at least 3 characters long' });
  }
  try {
    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) return res.status(200).json(task);
    res.status(404).json({ error: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  if (title && title.length < 3) {
    return res.status(400).json({ error: 'Title is required and must be at least 3 characters long' });
  }
  
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.update({ title, description, status });
      return res.status(200).json(task);
    }
    res.status(404).json({ error: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      return res.status(200).json({ message: 'Task deleted' });
    }
    res.status(404).json({ error: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
