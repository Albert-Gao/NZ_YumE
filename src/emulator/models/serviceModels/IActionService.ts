import {ISystemService} from "./ISystemService";

export interface IActionService{
    _systemService:ISystemService;
    goPage(name:string);
    showNotification(words:string);
    saveToLocalStorage(key:string,value:string);
    getFromLocalStorage(key:string):string;
}