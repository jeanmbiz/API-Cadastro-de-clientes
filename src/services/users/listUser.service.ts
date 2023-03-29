import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";


const listUserService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
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

  return users;
};

export default listUserService;
