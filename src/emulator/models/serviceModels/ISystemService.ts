import {IStateService} from "./IStateService";
import {ITemplatingService} from "./ITemplatingService";
export interface ISystemService{
    _stateService:IStateService;
    _templatingService:ITemplatingService;
    removeCurrentPageFromScreen();
    goPage(name:string);
    renewCurrentPage(name:string);
    showSplashScreen();
    hideSplashScreen();
    showNotification(text:string);
}