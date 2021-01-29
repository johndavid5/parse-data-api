
import express, { Request, Response } from 'express';
import { parseDataController2 } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    parseDataController2.parse(req, res);
});

