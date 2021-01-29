export class Parser {
    static parse(dataString: string): { [key: string]: any } {
        let sWho = 'Parser::parse';
        const regexpFirstLastNum = /([^0]+)([0]{4})([^0]+)([0]{3})([^0]+)/;
 
        const match: RegExpMatchArray | null = dataString.match(regexpFirstLastNum);
 
        let map: any=[];
        if( match && match.length >= 6){
            [map['fullMatch'],map['firstName'],map['firstZeroes'],map['lastName'],map['lastZeroes'],map['clientId']]=match;
            return map;
        }
        else{
             throw new Error('Cannot parse input');
        }
    }
}