"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getAllUser = void 0;
exports.editUser = editUser;
const users = [
    { id: 1, username: 'Hanspeter', email: 'contactdevhanspeter@gmail.com', password: '123' },
    { id: 2, username: 'João', email: "joao@123.com", password: '1234' },
];
const getAllUser = () => {
    return users;
};
exports.getAllUser = getAllUser;
const getUserById = (id) => {
    return users.find(user => user.id === id);
};
exports.getUserById = getUserById;
const createUser = (username, password, email) => {
    const newUser = {
        id: users.length + 1,
        username,
        password,
        email,
    };
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
function editUser(id, username, password) {
    const user = users.find(user => user.id === id);
    if (!user) {
        return null;
    }
    if (username)
        user.username = username;
    if (password)
        user.password = password;
    return { id: user.id, username: user.username, email: user.email, password: user.password };
}
