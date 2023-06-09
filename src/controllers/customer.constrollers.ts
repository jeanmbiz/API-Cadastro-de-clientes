import { iCustomerRequest, iCustomerUpdate } from "../Interfaces/Customer";
import { Request, Response } from "express";
import { createCustomerService } from "../services/customers/createCustomer.service";
import listCustomerService from "../services/customers/listCustomer.service";
import updateCustomerService from "../services/customers/updateCustomer.service";
import deleteCustomerService from "../services/customers/deleteCustomer.service";

const createCustomerController = async (req: Request, res: Response) => {
  const userId = req.userDecodedData.id;
  const customerData: iCustomerRequest = req.body;
  const newCustomer = await createCustomerService(customerData, userId);
  return res.status(201).json(newCustomer);
};

const listCustomerController = async (req: Request, res: Response) => {
  const userId = req.userDecodedData.id;
  const customers = await listCustomerService(userId);
  return res.json(customers);
};

const updateCustomerController = async (req: Request, res: Response) => {
  const customerData: iCustomerUpdate = req.body;
  const customerId = req.params.id;
  const updateCustomer = await updateCustomerService(customerData, customerId);
  return res.json(updateCustomer);
};

const deleteCustomerController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = await deleteCustomerService(userId);
  return res.status(204).json(data);
};

export {
  createCustomerController,
  listCustomerController,
  updateCustomerController,
  deleteCustomerController,
};
