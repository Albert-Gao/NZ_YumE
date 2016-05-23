/**
* This model represents the speech recognition.
* It will be used to serch hands free. 
*/
import {ISpeechService} from '../../../Emulator/TS/Services/ISpeechService';
<<<<<<< HEAD
/**
* @export
* @class represents a string that is returned from search
* @return {string} - returns requested search
*/
=======

/**
 * The ViewModel for the find page.
 *
 * @export
 * @class FindViewModel
 */
>>>>>>> origin/dev
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
<<<<<<< HEAD
/**
* @function - matches speech and string
* @param {array} - matches speech to string
* @returns {string} - returns the matched string
*/
=======

    /**
     * return the keyword by using the speech reconition.
     *
     * @param {ISpeechService} speech inject the service to the method.
     * @returns {string} return the actual keyword that the user wants.
     */
>>>>>>> origin/dev
    getKeywordByVoice(speech: ISpeechService): string {
        let keyword: string = speech.recognize();
        return keyword;
    }
}
