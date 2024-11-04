import { Request, Response } from "express";
import { getAllUser, getUserById, editUser, createUser } from "../services/userServices";

export const getUserHandler = async (req: Request, res: Response) => {
    const users = await getAllUser()
    res.status(200).json(users)
}

export const getUserByIdHandler = async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await getUserById(id)

    user
        ? res.status(200).json(user)
        : res.status(404).json({ errorMessage: "User not Found" })
}

export const createUserHandler = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body

    if (!email || !username || !password) {
        res.status(400).json({ errorMessage: "Insert correct Email, UserName and Password" })
        return
    }
    const user = await createUser(username, email, password)
    res.status(200).json({ message: "User created", user })
    return
}

export const editUserHandler = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const { username, email, password } = req.body

    const updateUser = await editUser(username, password, email)
    if (!updateUser) {
        res.status(404).json({ error: "User not found" });
        return
    }

    res.status(200).json({ message: "User Updated", updateUser })
    return
}


