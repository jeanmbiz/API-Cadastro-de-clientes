import { Request, Response } from "express";
import { IUserLogin } from "../Interfaces/User";
import createSessionService from "../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await createSessionService(sessionData);
  return res.json({ token });
};

export { createSessionController };