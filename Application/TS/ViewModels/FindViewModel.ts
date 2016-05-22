/**
* This model represents the speech recognition.
* It will be used to serch hands free. 
*/
import {ISpeechService} from '../../../Emulator/TS/Services/ISpeechService';
/**
* @export
* @class represents a string that is returned from search
* @return {string} - returns requested search
*/
export class FindViewModel {
    getKeyword(): string {
        //get the value of TextBlock.text
        return "get!";
    }
/**
* @function - matches speech and string
* @param {array} - matches speech to string
* @returns {string} - returns the matched string
*/
    getKeywordByVoice(speech: ISpeechService): string {
        let keyword: string = speech.recognize();
        return keyword;
    }
}