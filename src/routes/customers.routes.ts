import { Router } from "express";
import { createCustomerController, deleteCustomerController, listCustomerController, updateCustomerController } from "../controllers/customer.constrollers";


const customerRoutes = Router()

customerRoutes.get('', listCustomerController)
customerRoutes.post('', createCustomerController)
customerRoutes.patch('/:id', updateCustomerController)
customerRoutes.delete('/:id', deleteCustomerController )

export default customerRoutes