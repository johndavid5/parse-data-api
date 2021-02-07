import { Request, Response } from 'express';
import { ParseDataController } from '../ParseDataController';
import { Parser } from '../../common/Parser';
import { ResponseBody } from '../../common/ResponseBody';
import { Logger } from '../../common/Logger';

export class ParseDataController1 extends ParseDataController {

    public parse(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {

        let sWho = `ParseDataController1.parse`;
        Logger.debug(`${sWho}(): req.body.data = `, req.body.data );

        try {
            Logger.debug(`${sWho}(): Calling Parser.parse(req.body.data)...`);
            let map = Parser.parse(req.body.data);
            
            Logger.debug(`${sWho}(): Got back map = `, map );
            /* For example... 
            output = 
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
            Logger.debug(`${sWho}(): Caught an exception: `, error );
            res.status(500).json({ statusCode: 500, error: error.message });
        }
    }

}