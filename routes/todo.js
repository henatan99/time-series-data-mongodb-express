import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
// import { generateToken } from "../utils.js";
import data from "../data.js";
import User from "../models/todoModel.js";

const todoRouter = express.Router();

todoRouter.get(
    '/seed',
    expressAsyncHandler(
        async(req, res) => {
            await Todo.remove({});
            const createdTodos = await Todo.insertMany(data.todos);
            res.send({createdTodos});
        }
    ) 
)

// userRouter.post(
//     '/signin', 
//     expressAsyncHandler(
//         async(req, res) => {
//             const user = await User.findOne({ email: req.body.email });
//             if(bcrypt.compareSync(req.body.password, user.password)) {
//                 res.send({
//                     id: user.id,
//                     name: user.name,
//                     email: user.email,
//                     isAdmin: user.isAdmin,
//                     token:generateToken(user)
//                 });
//                 return;
//             }
//             res.status(401).send({ message: 'Invalid Email or Password' });
//         }
//     )
// )

export default todoRouter;