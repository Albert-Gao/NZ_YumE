import {IFunc} from "../emulator/models/dataModels/IFunction";
import {IElement} from "../emulator/models/dataModels/IElement";
import {IPage} from "../emulator/models/dataModels/IPage";
import {IActionService} from "../emulator/models/serviceModels/IActionService";

export class page3Map implements IPage{
    name: string;
    rawLayout: Array<IElement>;
    afterRenderLayout: JQuery;
    callback: Array<IFunc>;
    defaultMap: string = "https://maps.googleapis.com/maps/api/staticmap?&size=300x230&maptype=roadmap" +
                     "&visible=Octagon,Dunedin,NZ" +
                     "&markers=color:yellow%7Clabel:U%7C-45.8743,170.5036" +
                     "&key=AIzaSyDHTnM42xU_IGgOk0OGswZGOAtDRr8e66I";

    constructor() {
        this.name = "page3Map";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
    }

    returnRawLayout():Array<IElement>{
        return [
            {
                type:"text",
                name:"page3placeholder",
                define:" "
            },
            {
                type:"button",
                name:"backToResults",
                define:"go back"
            },
            {
                type:"text",
                name:"page3placeholder",
                define:" "
            },
            {
                type:"image",
                name:"page3image",
                define: this.defaultMap
            }
        ];
    }

    returnCallbackFuncs():Array<IFunc>{
        return [
            {
                bindToName:"backToResults",
                callbackFunction:this.goBackButtonCallBack
            }
        ];
    }

    goBackButtonCallBack(_actionService:IActionService){
        _actionService.goPage("page2list");
    }
}
