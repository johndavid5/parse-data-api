import { Request, Response } from 'express';
import { ParseDataController } from '../ParseDataController';
import { Parser } from '../../common/Parser';
import { ResponseBody } from '../../common/ResponseBody';

export class ParseDataController2 extends ParseDataController {

    public parse(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        let sWho = 'ParseDataController2::parse'

        try {
            let map = Parser.parse(req.body.data);
            /* For example... 
                {
                    statusCode: 200,
                    data:  {
                        firstName: “JOHN”,
                        lastName: “MICHAEL”,
                        clientId: “999-4567”
                }
            */
            let output: ResponseBody = {
                statusCode: 200,
                data:  {
                    firstName: map['firstName'],
                    lastName: map['lastName'],
                    clientId: `${map['clientId'].substring(0,3)}-${map['clientId'].substring(3)}`
                }
            }
            res.json(output);
        }
        catch( error ){
             res.json({ statusCode: 500, error: error.toString() })
        }
    }

}