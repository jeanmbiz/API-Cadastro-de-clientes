import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
