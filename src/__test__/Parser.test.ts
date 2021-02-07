import { Parser } from '../common/Parser'
import { Logger } from '../common/Logger';

describe('Parser Test', () => {

  let it1 = "Should parse string delimited by four zeroes and three zeroes into firstName, firstZeroes, lastName, lastZeroes, and clientId";
  it(it1, () => {
    let sWho = `Parser Test::${it1}`;
    let input:string = 'JOHN0000MICHAEL0009994567';
    Logger.debug(`${sWho}: input = `, input );
    let outputMap: { [key: string]: any }  = {};
    try {
        outputMap = Parser.parse(input);
        Logger.debug(`${sWho}: outputMap = `, outputMap );
        // expect(outputMap).toBe({firstName: 'JOHN', firstZeroes: '0000', lastName: 'MICHAEL', lastZeres: '000', clientId: '9994567'});
        expect(outputMap.firstName).toEqual('JOHN');
        expect(outputMap.firstZeroes).toEqual('0000');
        expect(outputMap.lastName).toEqual('MICHAEL');
        expect(outputMap.lastZeroes).toEqual('000');
        expect(outputMap.clientId).toEqual('9994567');
    }
    catch( exception ){
        Logger.debug(`${sWho}: caught exception:`, exception );
    }
  })


  let it2 = "Should throw exception if parse string is not delimited by four zeroes and three zeroes";
  it(it2, () => {
    let sWho = `Parser Test::${it1}`;
    // Delimited by 3 zeroes and 2 zeroes...supposed to be delimited by 4 zeroes and 3 zeroes...
    let input:string = 'JOHN000MICHAEL009994567'; 
    Logger.debug(`${sWho}: input = `, input );
    let outputMap: { [key: string]: any }  = {};
    try {
        outputMap = Parser.parse(input);
        Logger.debug(`${sWho}: outputMap = `, outputMap );
    }
    catch( exception ){
        Logger.debug(`${sWho}: caught exception:`, exception );
        Logger.debug(`${sWho}: exception.message = `, exception.message );
        expect(exception.message).toBe('Cannot parse input')
    }
  })

})