import { Router } from 'express';

const userRouter = Router()

userRouter.get('./getAllUsers', (req, res) => {
    res.send(
        {
            title: 'Get all users'
        }
    );
});

userRouter.get('./getUserById', (req, res) => {
    res.send(
        {
            title: 'Get user'
        }
    );
});


userRouter.update('./editUserById', (req, res) => {
    res.send(
        {
            title: 'Update User'
        }
    );
});


userRouter.update('./softDelete', (req, res) => {
    res.send(
        {
            title: 'Deleted'
        }
    );
});

export default userRouter;
