import {IActionService} from "../models/serviceModels/IActionService";
import {IStateService} from "../models/serviceModels/IStateService";

export class ActionService implements IActionService{
    constructor(stateService: IStateService) {
        this._stateService = stateService;
    }
    _stateService: IStateService;
    goPage(name: string) {
    }

    showNotification(words: string) {
    }
}