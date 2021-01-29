
import express, { Request, Response } from 'express';
import { parseDataController1 } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    parseDataController1.parse(req, res);
});

