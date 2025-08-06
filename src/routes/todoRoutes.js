import express from 'express'
import prisma from '../prismaClient.js';

const router = express.Router();

// Get all todos for logged-in user
router.get('/', async (req, res) => {
    const todos = await prisma.todo.findMany({
        where: { userId: req.userId }
    })

    res.json(todos);
})

// Create a new todo
router.post('/', async (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).send({ message: 'Task is required' });
    }
    const todo = await prisma.todo.create({
        data: {
            task,
            userId: req.userId
        }
    })

    res.status(201).json(todo);
})

// Update a todo
router.put('/:id', async (req, res) => {
    const { completed } = req.body;
    const { id } = req.params;
    const updatedTodo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed,
        }
    });
    if (result.changes === 0) {
        return res.status(404).send({ message: 'Todo not found or you do not have permission to update it' });
    }
    res.json(updatedTodo);
    res.sendStatus(200);
})

// Delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTodo = await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId: req.userId
        }
    });
    if (result.changes === 0) {
        return res.status(404).send({ message: 'Todo not found or you do not have permission to delete it' });
    }
    res.sendStatus(204);
})

export default router;