import {IFunc} from "../emulator/models/dataModels/IFunction";
import {IElement} from "../emulator/models/dataModels/IElement";
import {IPage} from "../emulator/models/dataModels/IPage";
import {IActionService} from "../emulator/models/serviceModels/IActionService";

export class page2list implements IPage{
    name: string;
    rawLayout: Array<IElement>;
    afterRenderLayout: JQuery;
    callback: Array<IFunc>;

    constructor() {
        this.name = "page2list";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
    }

    returnRawLayout():Array<IElement>{
        return [
            {
                type:"text",
                name:"page2placeholder1",
                define:"  "
            },
            {
                type:"text",
                name:"page2placeholder2",
                define:"  "
            },
            {
                type:"button",
                name:"page2button",
                define:"go back"
            },
            {
                type:"text",
                name:"page2placeholder3",
                define:"  "
            },
            {
                type:"text",
                name:"page2placeholder4",
                define:"   "
            },
            {
                type:"image",
                name:"page2image",
                define:"http://s3-media1.fl.yelpcdn.com/photo/_87c-Gu1rjTbPtwHd90vDA/ms.jpg"
            },
            {
                type:"text",
                name:"page2text",
                define:"I really love it"
            }
        ];
    }

    returnCallbackFuncs():Array<IFunc>{
        return [
            {
                bindToName:"page2button",
                callbackFunction:this.goBackButtonCallBack
            }
        ];
    }

    goBackButtonCallBack(_actionService:IActionService){
        _actionService.goPage("page1search");
    }
}
