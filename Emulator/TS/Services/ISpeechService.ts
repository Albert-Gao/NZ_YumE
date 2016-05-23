import {IListItem} from '../../../Application/TS/Models/IListItem.ts';

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