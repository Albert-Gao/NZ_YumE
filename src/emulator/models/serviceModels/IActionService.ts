
import {IStateService} from "./IStateService";
export interface IActionService{
    _stateService:IStateService;
    goPage(name:string);
    showNotification(words:string);
}