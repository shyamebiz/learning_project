import express from "express";
import { getUsers, createUser, loginUser } from "../controllers/user.controller";

const router = express.Router(); // ✅ Correctly using Router

// Define routes correctly
router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/login", loginUser);

export default router;
