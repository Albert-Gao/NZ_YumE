/**
 * This model represents the speech service.
 * creates a userinterface for speech recognition
 * 
 * @import
 * @export
 * @emulator
 */
import {IListItem} from '../../../Application/TS/Models/IListItem';

/**
 * Allows for speech recognition
 *
 * @export
 * @interface ISpeechService
 */
export interface ISpeechService{
    /**
     * Identify the spoken phrase
     *
     * @returns {string} - spoken phrase is returned
     */
    recognize():string;
}
