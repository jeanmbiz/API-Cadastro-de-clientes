import AppDataSource from "../../data-source";
import Customers from "../../entities/customers.entity";
import User from "../../entities/users.entity";
import { iCustomerRequest, iCustomerResponse } from "../../Interfaces/Customer";

const createCustomerService = async (
  customerData: iCustomerRequest,
  userId: string
): Promise<iCustomerResponse> => {
  const customerRepository = AppDataSource.getRepository(Customers);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({id:userId})

  const createCustomer = customerRepository.create({...customerData, user});

  await customerRepository.save(createCustomer);

  return createCustomer;
};

export { createCustomerService };
