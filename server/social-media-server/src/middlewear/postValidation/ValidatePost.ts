import { Request, Response, NextFunction } from "express";
import { postSchema } from "./PostvalidationSchemas";

export const validatePostReq = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = postSchema.validate(req.body);
    console.log('....post creating')
    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    next();
  };
};
