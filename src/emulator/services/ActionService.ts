import {IActionService} from "../models/serviceModels/IActionService";
import {ISystemService} from "../models/serviceModels/ISystemService";

export class ActionService implements IActionService{
    _systemService: ISystemService;

    constructor(systemService: ISystemService) {
        this._systemService = systemService;
    }

    goPage(name: string) {
        this._systemService.goPage(name);
    }

    showNotification(words: string) {
        this._systemService.showNotification(words);
    }

    saveToLocalStorage(key: string, value: string) {
        localStorage.setItem(key,value);
    }

    getFromLocalStorage(key: string): string {
        return localStorage.getItem(key);
    }
}