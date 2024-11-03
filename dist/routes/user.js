"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../handlers/user");
const router = (0, express_1.Router)();
router.get('/', user_1.getUserHandler);
router.get('/:id', user_1.getUserByIdHandler);
router.post('/create-user', user_1.createUserHandler);
router.put('/edit-user/:id', user_1.editUserHandler);
exports.default = router;