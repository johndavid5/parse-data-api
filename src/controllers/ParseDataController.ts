import { Request, Response } from 'express';

export abstract class ParseDataController {
    public abstract parse(req: Request, res: Response): void;
}