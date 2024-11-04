import User from "../context/User";
import { UserNotFoundErrorException } from "../exceptions/UserNotFoundErrorException";
import { BusinessException } from "../exceptions/BusinessException";

export const getAllUser = async () => {
    return await User.find()
}

export const getUserById = async (id: string) => {
    try {
        const user = await User.findById(id)
        if (!user) {
            throw new UserNotFoundErrorException(id)
        }

        return user
    } catch (error) {
        throw new BusinessException("ERROR: Contact the IT department")
    }
}

export const createUser = async (username: string, email: string, password:string) => {
    const newUser = new User({ username,email , password })
    return await newUser.save()
}


export const editUser = async (id: string, username?: string, email?: string,password?: string) => {
    try {
        const userUpdated = await User.findByIdAndUpdate(

            id,
            { username, password, email },
            { new: true }
        )

        if (!userUpdated) {
            throw new UserNotFoundErrorException(id)
        }

        return userUpdated

    } catch (error) {
        throw new BusinessException("ERROR: Contact the IT department")
    }


}
