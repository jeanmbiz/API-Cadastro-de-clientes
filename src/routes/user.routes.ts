import { Router } from "express";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsUserAndActive from "../middlewares/ensureIsUserAndActive.middleware";
import { userUpdateSchema } from "../schemas/createUser.schema";

const userRoutes = Router();

userRoutes.get("", ensureAuthMiddleware, listUserController);
userRoutes.post("", createUserController);
userRoutes.patch("/:id", ensureAuthMiddleware, ensureIsUserAndActive, ensureDataIsValidMiddleware(userUpdateSchema), updateUserController);
userRoutes.delete("/:id", ensureAuthMiddleware, ensureIsUserAndActive, deleteUserController);

export default userRoutes;
