"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserHandler = getUserHandler;
exports.getUserByIdHandler = getUserByIdHandler;
exports.createUserHandler = createUserHandler;
exports.editUserHandler = editUserHandler;
const userServices_1 = require("../services/userServices");
function getUserHandler(req, res) {
    const users = (0, userServices_1.getAllUser)();
    res.status(200).json(users);
}
function getUserByIdHandler(req, res) {
    const id = parseInt(req.params.id);
    const user = (0, userServices_1.getUserById)(id);
    user
        ? res.status(200).json(user)
        : res.status(404).json({ errorMessage: "User not Found" });
}
function createUserHandler(req, res) {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ errorMessage: "Username, password, and email are required" });
    }
    const newUser = (0, userServices_1.createUser)(username, password, email);
    return res.status(201).json(newUser);
}
function editUserHandler(req, res) {
    const id = parseInt(req.params.id);
    const { username, password } = req.body;
    if (!username && !password) {
        return res.status(400).json({ errorMessage: "ERROR:Nenhum dado introduzido para atualização" });
    }
    const updatedUser = (0, userServices_1.editUser)(id, username, password);
    if (!updatedUser) {
        return res.status(404).json({ error: "Usuario nao encontrado na base de dados" });
    }
    return res.status(200).json(updatedUser);
}
