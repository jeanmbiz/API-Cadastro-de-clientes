import AppDataSource from "../../data-source";
import Customers from "../../entities/customers.entity";


const listCustomerService = async (userId:string): Promise<Customers[]> => {
  const customerRepository = AppDataSource.getRepository(Customers);

  const customers = await customerRepository.find({
    where:{
      user: {id: userId}
    }
  });

  return customers;
};

export default listCustomerService;
