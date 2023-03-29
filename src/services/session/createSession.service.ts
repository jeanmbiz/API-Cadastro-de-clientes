import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken';
import AppDataSource from "../../data-source";
import "dotenv/config";
import { IUserLogin } from "../../Interfaces/User";
import { AppError } from "../../errors/AppErrors";
import User from "../../entities/users.entity";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });

  if (!user.isActive) {
    throw new AppError("User is not active", 400);
  }

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return token;
};

export default createSessionService;