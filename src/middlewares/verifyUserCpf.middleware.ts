import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { UserRepo } from "../interfaces/user.interface";
import User from "../entities/user.entity";
import { AppError } from "../errors/app.error";

export const verifyCpf = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { cpf} = req.body;
  if (!cpf) {
    return next();
  }
  const repo: UserRepo = AppDataSource.getRepository(User);
  const user: User | null = await repo.findOneBy({ cpf: cpf });

  if (user) throw new AppError("Cpf já cadastrado, verifique novamente!", 409);

  return next();
};