import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const USERS_FILE = path.join(__dirname, "../users.json");

const readUsers = (): any[] => {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeUsers = (users: any[]) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// ✅ Ensure all functions return void, not Response
export const getUsers = (req: Request, res: Response): void => {
  try {
    const users = readUsers();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

export const createUser = (req: Request, res: Response): void => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    const users = readUsers();
    if (users.some(user => user.username === username)) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const newUser = { id: Date.now(), username, password };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const loginUser = (req: Request, res: Response): void => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    const users = readUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
