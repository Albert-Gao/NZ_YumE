import {IApp} from "../emulator/models/dataModels/IApp";
import {IPage} from "../emulator/models/dataModels/IPage";
import {page1search} from "./page1search";
import {IActionService} from "../emulator/models/serviceModels/IActionService";
import {IFunc} from "../emulator/models/dataModels/IFunction"

export class application implements IApp {

    title: string;
    currentPageName: string;
    startPageName: string;
    pages: Array<IPage>;
    CentralCallbackFunc: (pageName: string, elementID?: string) => any;
    _actionService: IActionService;

    constructor() {
        this.title = "YumE";
        this.currentPageName = "";
        this.startPageName = "page1search";
        this.pages = [];
        this.CentralCallbackFunc = this.appCallback;
    }

    injectActionService(as: IActionService) {
        this._actionService = as;
    }

    startAddingPages() {
        this.pages.push(new page1search());
    }

    createPageArray() {

    }

    appCallback(pageName:string, elementName: string, targetElementInfo?: string) {
        console.log("I am here at application");
        console.log(targetElementInfo);
        switch (elementName){
            case "page1button":
                let func:Function;
                func = this.getMatchedFunction(pageName, elementName, targetElementInfo);
                func(this._actionService,targetElementInfo);
                break;
        }
    }

    getMatchedFunction(pageName: string, elementID: string, targetElementID?:string): Function {
        let callback: IFunc;
        let targetPage: IPage;

        for (let page of this.pages) {
            if (page.name === pageName) {
                targetPage = page;
                break;
            }
        }

        for (let func of targetPage.callback) {
            if (func.bindToName === elementID) {
                callback = func;
                break;
            }
        }

        return callback.callbackFunction;
    }
}
