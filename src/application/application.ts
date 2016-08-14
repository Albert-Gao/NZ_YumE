import {IApp} from "../emulator/models/dataModels/IApp";
import {IPage} from "../emulator/models/dataModels/IPage";
import {page1search} from "./page1search";
import {IActionService} from "../emulator/models/serviceModels/IActionService";

export class application implements IApp{

    title: string;
    currentPageName: string;
    startPageName:string;
    pages: Array<IPage>;
    CentralCallbackFunc: (pageName: string, elementID?: string)=>any;
    _actionService:IActionService;

    constructor() {
        this.title = "YumE";
        this.currentPageName = "";
        this.startPageName = "page1search";
        this.pages = [];
        this.CentralCallbackFunc = this.appCallback;
    }

    injectActionService(as:IActionService){
        this._actionService = as;
    }

    startAddingPages(){
        this.pages.push(new page1search(this._actionService));
    }

    createPageArray(){

    }

    appCallback(elementName:string, targetElementInfo?:string){
        console.log("I am here!");
    }
}