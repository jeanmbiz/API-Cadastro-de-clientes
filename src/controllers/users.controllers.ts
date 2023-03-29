import { Request, Response } from "express";
import { iUserRequest, iUserUpdate } from "../Interfaces/User";
import { createUserService } from "../services/createUser.service";
import deleteUserService from "../services/deleteUser.service";
import listUserService from "../services/listUser.service";
import updateUserService from "../services/updateUser.service";


const createUserController = async (req: Request, res: Response) => {
  const userData: iUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const user = await listUserService();
  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData: iUserUpdate = req.body;
  const userId = req.params.id;
  const updatedUser = await updateUserService(userData, userId);
  return res.json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = await deleteUserService(userId);
  return res.status(204).json(data);
};

export { createUserController, listUserController, updateUserController, deleteUserController };
