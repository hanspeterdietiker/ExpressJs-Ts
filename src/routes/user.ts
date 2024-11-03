import express from "express"
import { createUserHandler, editUserHandler, getUserByIdHandler, getUserHandler, } from "../handlers/user";

const router = express.Router()

router.get('/', getUserHandler)

router.get('/:id', getUserByIdHandler)

router.post('/create-user', createUserHandler)

router.put('/edit-user/:id',editUserHandler)

export default router;