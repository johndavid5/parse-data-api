import { Request, Response } from 'express';
import { ParseDataController } from '../ParseDataController';
import { Parser } from '../../common/Parser';
import { ResponseBody } from '../../common/ResponseBody';

export class ParseDataController1 extends ParseDataController {

    public parse(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {

        try {
            let map = Parser.parse(req.body.data);
            /* For example... 
            {
                statusCode: 200,
                data:  {
                    firstName: “JOHN0000”,
                    lastName: “MICHAEL000”,
                    clientId: “9994567”
                }
            }
            */
            let output : ResponseBody = {
                statusCode: 200,
                data:  {
                    firstName: map['firstName'] + map['firstZeroes'],
                    lastName: map['lastName'] + map['lastZeroes'],
                    clientId: map['clientId']
                }
            }
            res.json(output);
        }
        catch( error ){
            res.json({ statusCode: 500, error: error.toString() })
        }
    }

}