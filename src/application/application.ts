import {IApp} from "../emulator/models/dataModels/IApp";
import {IPage} from "../emulator/models/dataModels/IPage";
import {page1search} from "./page1search";
import {page2list} from "./page2list";
import {IActionService} from "../emulator/models/serviceModels/IActionService";
import {IFunc} from "../emulator/models/dataModels/IFunction"
import {IListItem} from "../emulator/models/dataModels/IListItem";

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

<<<<<<< HEAD
    startAddingPages(){
        console.log("test");
        this.pages.push(new page1search(this._actionService));
=======
    startAddingPages() {
        this.pages.push(new page1search());
        this.pages.push(new page2list());
>>>>>>> master
    }

    createPageArray() {

    }

    appCallback(pageName:string, elementName: string, targetElementInfo?: string) {
        switch (elementName){
            case "page1button":
                let func:Function;
                if (targetElementInfo){
                    this._actionService.callYelpSearchAPI(targetElementInfo,(json:any)=>{
                        let list = this.tailorYelpResult(json);
                        for(let page of this.pages){
                            if (page.name === 'page2list'){
                                for(let e of page.rawLayout){
                                    if (e.type === 'text'&&e.name==='page2text'){
                                        e.define = list;
                                    } else if (e.type === 'image') {
                                        if (typeof json != 'undefined'){
                                            e.define = <string>json.snippet_image_url;
                                        }
                                    }
                                }
                                this._actionService.reRenderPage(page);
                                break;
                            }
                        }
                        func = this.getMatchedFunction(pageName,elementName,targetElementInfo);
                        func(this._actionService,targetElementInfo);
                    });
                } else {
                    this.getMatchedFunction(pageName,elementName)(this._actionService);
                }

                break;
            case "page2button":
                //OK, Sorry, just want to get rid of it soon...it works,
                //since I know the exact place.
                this.pages[1].callback[0].callbackFunction(this._actionService);
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

    tailorYelpResult(json:Object):string{
        console.log(json);
        let define:string;

        //Yelp API suck even for v2 version.
        if (json) {
            let _item:any = json;

            //Curse you yelp, we need to these shit coding,
            //to cover your bad non-consistent API design.
            let title:string = _item.name?_item.name:"";
            let phone:string = _item.phone?_item.phone:"";
            let rating:string = _item.rating?_item.rating:"";
            let category:string = _item.categories?_item.categories[0][0]:"";
            let comment:string = _item.snippet_text?_item.snippet_text:"";

            define ='<br/>'+'<strong>Title: \</strong>' + title + '<br/>'+'<strong>Phone: \</strong>' + phone + '<br/>' +'<strong>Rating: \</strong>' + rating + '   |  ' +'<strong>Category: \</strong>' + category + '<br/>' +'<strong>Comment: \</strong>' + comment;
        } else {
            define = '<br/>' + "sorry, Yelp can't recognize your keyword, please go back and search again."
        }
        return define;
    }
}
