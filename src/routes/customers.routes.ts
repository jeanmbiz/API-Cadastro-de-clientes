import { Router } from "express";
import { createCustomerController, deleteCustomerController, listCustomerController, updateCustomerController } from "../controllers/customer.constrollers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsUserAndActive from "../middlewares/ensureIsUserAndActive.middleware";
import { userUpdateSchema } from "../schemas/createUser.schema";


const customerRoutes = Router()

customerRoutes.get('', ensureAuthMiddleware, listCustomerController)
customerRoutes.post('', ensureAuthMiddleware, createCustomerController)
customerRoutes.patch('/:id', ensureAuthMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), updateCustomerController)
customerRoutes.delete('/:id', ensureAuthMiddleware, deleteCustomerController )

export default customerRoutes