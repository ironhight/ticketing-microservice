import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ message: err.serializeErrors() });
  }

  console.error(err);
  res.status(400).send({ error: [{ message: 'Something wend wrong' }] });
};
