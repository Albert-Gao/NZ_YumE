import { ISpeechService } from '../../../Emulator/TS/Services/ISpeechService';

/**
 * The ViewModel for the find page.
 * 
 * @export
 * @class FindViewModel
 */
export class FindViewModel {
    /**
     * return the keyword that the user inputs.
     * 
     * @returns {string} the return value
     */
    getKeyword(): string {
        //get the value of TextBlock.text
        return "get!";
    }

    /**
     * return the keyword by using the speech reconition.
     * 
     * @param {ISpeechService} speech inject the service to the method.
     * @returns {string} return the actual keyword that the user wants.
     */
    getKeywordByVoice(speech: ISpeechService): string {
        let keyword: string = speech.recognize();
        return keyword;
    }
}