/**
 * This model represents the speech service.
 * creates a userinterface for speech recognition
 * 
 * @import
 * @export
 * @emulator
 */
import {IListItem} from '../../../Application/TS/Models/IListItem';

export interface ISpeechService{
    recognize():string;
}