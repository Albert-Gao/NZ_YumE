import {ICallbackService} from "../models/serviceModels/ICallbackService";
import {IStateService} from "../models/serviceModels/IStateService";

export class CallbackService implements ICallbackService{
    _stateService: IStateService;

    constructor(stateService: IStateService) {
        this._stateService = stateService;
    }
    callback(elementID: string) {
    }
}
