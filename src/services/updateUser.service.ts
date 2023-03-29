import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../errors/AppErrors";
import { iUserResponse, iUserUpdate } from "../Interfaces/User";
import { userResponseSchema } from "../schemas/createUser.schema"


const updateUserService = async(userData: iUserUpdate, userId:string):Promise<iUserResponse> =>{

    const{ name, password, email, phone } = userData

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id: userId})

    if (!findUser){
       throw new AppError("User doest not exist", 401) 
    }

    const updateUser = userRepository.create({
        ...findUser,
        name: name || findUser.name,
        password: password || findUser.password,
        email: email || findUser.email,
        phone: phone || findUser.phone
    })

    await userRepository.save(updateUser)

    const updatedUserWithoutPassowrd = userResponseSchema.validate(
        updateUser,
        {
            stripUnknown: true,
        }
    )

    return updatedUserWithoutPassowrd
}

export default updateUserService