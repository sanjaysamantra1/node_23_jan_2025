const express = require('express');
const { getAllUsers, get1User, addNewUser, updateUser, deleteUser } =
    require('../controllers/user_controller');

    export {};
    
let userRouter = express.Router();
// userRouter.use(myLogger)

userRouter.get('/', getAllUsers);
userRouter.get('/:id', get1User);
userRouter.post('/', addNewUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.all('*',(req,res)=>{
    res.send('NO such page found')
})

module.exports = userRouter;