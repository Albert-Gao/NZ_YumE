import {IApp} from "../dataModels/IApp";
import {ITemplatingService} from "./ITemplatingService";
export interface ISystemService{
    _app:IApp;
    removeCurrentPage();
    goPage(name:string);
    renewCurrentPage(name:string);
    showSplashScreen();
    hideSplashScreen();
    showErrorScreen();
}