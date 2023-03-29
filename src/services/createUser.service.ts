import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../errors/AppErrors";
import { iUserRequest, iUserResponse } from "../Interfaces/User";
import { userResponseSchema } from "../schemas/createUser.schema";

const createUserService = async (userData: iUserRequest): Promise<iUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const userAreadyExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (userAreadyExists) {
    throw new AppError("This email address is already being used", 409);
  }

  const createUser = userRepository.create(userData);

  await userRepository.save(createUser);

  const userWithouPassword = await userResponseSchema.validate(createUser, {
    stripUnknown: true,
  });

  return userWithouPassword;
};

export { createUserService };
