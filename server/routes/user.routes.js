import { Router } from 'express';

const userRouter = Router()

userRouter.get('./', (req, res) => {
    res.send(
        {
            title: 'Fetch all users'
        }
    );
});

userRouter.get('./:id', (req, res) => {
    res.send(
        {
            title: 'Fetch user'
        }
    );
});


userRouter.update('./:id', (req, res) => {
    res.send(
        {
            title: 'Update User'
        }
    );
});


userRouter.update('./:id', (req, res) => {
    res.send(
        {
            title: 'Deleted'
        }
    );
});

export default userRouter;
