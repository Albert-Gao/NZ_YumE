import {IListItem} from '../../../Application/TS/Models/IListItem';

/**
 * (description)
 * 
 * @export
 * @interface ISpeechService
 */
export interface ISpeechService{
    /**
     * (description)
     * 
     * @returns {string} (description)
     */
    recognize():string;
}