import {IStateService} from "../serviceModels/IStateService";

export interface ICallbackService{
    _stateService:IStateService;
    callback(elementID:string);
}
