import AppDataSource from "../../data-source"
import Customers from "../../entities/customers.entity"
import { AppError } from "../../errors/AppErrors"
import { iCustomerRequest, iCustomerResponse, iCustomerUpdate } from "../../Interfaces/Customer"



const updateCustomerService = async(customerData: iCustomerUpdate, userId:string):Promise<iCustomerResponse> =>{

    const{ name, email, phone } = customerData

    const customerRepository = AppDataSource.getRepository(Customers)

    const findCustomer = await customerRepository.findOneBy({id: userId})

    if (!findCustomer){
       throw new AppError("User doest not exist", 401) 
    }

    const updateCustomer = customerRepository.create({
        ...findCustomer,
        name: name || findCustomer.name,
        email: email || findCustomer.email,
        phone: phone || findCustomer.phone
    })

    await customerRepository.save(updateCustomer)


    return updateCustomer
}

export default updateCustomerService