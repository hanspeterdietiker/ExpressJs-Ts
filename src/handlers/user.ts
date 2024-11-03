import { Request, Response } from "express";
import { getAllUser, getUserById, editUser, createUser } from "../services/userServices";


export const getUserHandler = async (req: Request, res: Response) => {
    const users = await getAllUser()
    res.status(200).json(users)
}

export const getUserByIdHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const user = await getUserById(id)

    user
        ? res.status(200).json(user)
        : res.status(404).json({ errorMessage: "User not Found" })
}

export const createUserHandler = async (req: Request, res: Response) => {
    const { email, username, password } = req.body

    if (!email || !username || !password) {
        return res.status(400).json({ errorMessage: "Insert correct Email, UserName and Password" })
    }
    const user = await createUser(email, username, password)
    return res.sendStatus(200).json({ message: "User created", user }).end()
}

export const editUserHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const { username, password } = req.body

    const updateUser = await editUser(id, username, password)
    if (!updateUser) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.sendStatus(200).json({ message: "User Updated", updateUser })
}


