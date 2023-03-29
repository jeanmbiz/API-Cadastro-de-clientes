import AppDataSource from "../../data-source";
import Customers from "../../entities/customers.entity";
import { AppError } from "../../errors/AppErrors";


const deleteCustomerService = async (userId: string): Promise<Object> => {
    const customerRepository = AppDataSource.getRepository(Customers);
    const findCustomer = await customerRepository.findOneBy({ id: userId });
  
    if (!findCustomer) {
      throw new AppError("User doest not exist", 404);
    }
  
    if (findCustomer.isActive == false) {
      throw new AppError("User is already inative", 400);
    }
  
    findCustomer.isActive = false;
    await customerRepository.save(findCustomer);
    return {};
  };
  
  export default deleteCustomerService;
  