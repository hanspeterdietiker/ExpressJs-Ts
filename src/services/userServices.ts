import { userDto } from "../dtos/userDto";
import { User } from "../types/User";


const users: User[] = [
    { id: 1, username: 'Hanspeter', email: 'contactdevhanspeter@gmail.com', password: '123' },
    { id: 2, username: 'João', email: "joao@123.com", password: '1234' },
]

export const getAllUser = (): User[] => {
    return users;
}

export const getUserById = (id: number): User | undefined => {
    return users.find(user => user.id === id)
}
export const createUser = (username: string, password: string, email: string): User => {
    const newUser: User = {
        id: users.length + 1,
        username,
        password,
        email,
    }
    users.push(newUser)
    return newUser
}
export function editUser(id: number, username?: string, password?: string): userDto | null {

    const user = users.find(user => user.id === id);
    if (!user) {
        return null;
    }


    if (username) user.username = username;
    if (password) user.password = password;


    return { id: user.id, username: user.username, email: user.email, password: user.password };
}
