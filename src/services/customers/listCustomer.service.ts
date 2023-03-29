import AppDataSource from "../../data-source";
import Customers from "../../entities/customers.entity";


const listCustomerService = async (): Promise<Customers[]> => {
  const userRepository = AppDataSource.getRepository(Customers);

  const customers = await userRepository.find({
    select: [
      "id",
      "name",
      "email",
      "phone",
      "isActive",
      "createdAt",
      "updatedAt",
    ],
  });

  return customers;
};

export default listCustomerService;
