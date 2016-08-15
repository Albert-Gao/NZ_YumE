import {IFunc} from "../emulator/models/dataModels/IFunction";
import {IElement} from "../emulator/models/dataModels/IElement";
import {IPage} from "../emulator/models/dataModels/IPage";
import {IActionService} from "../emulator/models/serviceModels/IActionService";

export class page1search implements IPage{
    name: string;
    rawLayout: Array<IElement>;
    afterRenderLayout: JQuery;
    callback: Array<IFunc>;

    constructor() {
        this.name = "page1search";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
    }

    returnRawLayout():Array<IElement>{
        return [
            {
                type:"image",
                name:"page1image",
                define:"./assets/YuMe_logo.jpg"
            },
            {
                type:"text",
                name:"page1text",
                define:"Search your favourite, eat your favourite :)"
            },
            {
                type:"input",
                name:"page1input",
                define:"Enter the name"
            },
            {
                type:"button",
                name:"page1button",
                targetElementID:"page1input",
                define:"YumE it!"
            }
        ];
    }

    returnCallbackFuncs():Array<IFunc>{
        return [
            {
                bindToName:"page1button",
                targetID:"page1text",
                callbackFunction:this.searchButtonCallBack
            }
        ];
    }

    searchButtonCallBack(_actionService:IActionService, info:string){
        if (info && info != ""){
            _actionService.goPage("page2list");
        } else{
            _actionService.showNotification("Please enter the name of restaurant.");
        }
    }
}
