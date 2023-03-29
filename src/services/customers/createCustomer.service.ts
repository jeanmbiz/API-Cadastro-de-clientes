import AppDataSource from "../../data-source";
import Customers from "../../entities/customers.entity";
import { iCustomerRequest, iCustomerResponse } from "../../Interfaces/Customer";

const createCustomerService = async (
  customerData: iCustomerRequest
): Promise<iCustomerResponse> => {
  const customerRepository = AppDataSource.getRepository(Customers);

  const createCustomer = customerRepository.create(customerData);

  await customerRepository.save(createCustomer);

  return createCustomer;
};

export { createCustomerService };
