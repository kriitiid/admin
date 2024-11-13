import express from 'express';
import User from './api/models/user.model.js';

const userRouter = express.Router();

// Define a test route
userRouter.get('/test', (req, res) => {
    res.json({ 
        message: 'Hello World!'
    });
});

export default userRouter;
