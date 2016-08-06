import {IPage} from './../dataModels/IPage'
import {IApp} from "../dataModels/IApp";
import {IStateService} from "./IStateService";

export interface ITemplatingService{
    _app:IApp;
    _stateService:IStateService;
    generatePage(page:IPage):JQuery;
    generatePages();
    generateLayout():JQuery;
}