<<<<<<< HEAD
/**
 * This model represents the speech service.
 * creates a userinterface for speech recognition
 * 
 * @import
 * @export
 * @emulator
 */
import {IListItem} from '../../../Application/TS/Models/IListItem';
=======
import {IListItem} from '../../../Application/TS/Models/IListItem.ts';
>>>>>>> 6d5b5009ffac52715871e15bdafcad9f87f50bbd

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
