import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../errors/AppErrors";

interface CustomRequest extends Request {
  userDecodedData: any;
}


const ensureIsUserAndActive: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {  
  
  if (!req.userDecodedData.isActive || req.userDecodedData.id !== req.params.id) {
    throw new AppError("You don't have permission", 403);
  }
  next();
};

export default ensureIsUserAndActive;
