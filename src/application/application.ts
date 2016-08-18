import {IApp} from "../emulator/models/dataModels/IApp";
import {IPage} from "../emulator/models/dataModels/IPage";
import {page1search} from "./page1search";
import {page2list} from "./page2list";
import {page3Map} from "./page3Map";
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

    startAddingPages() {
        this.pages.push(new page1search());
        this.pages.push(new page2list());
        this.pages.push(new page3Map());
    }

    createPageArray() {

    }

    appCallback(pageName:string, elementName: string, targetElementInfo?: string) {
        let func:Function;
        switch (elementName){
            case "page1button":
                if (targetElementInfo){
                    this._actionService.callYelpSearchAPI(targetElementInfo,(json:any)=>{
                        let list = this.tailorYelpResult(json);
                        for(let page of this.pages){
                            if (page.name === 'page2list'){
                                for(let e of page.rawLayout){
                                    if (e.type === 'text'&&e.name==='page2text'){
                                        e.define = list;
                                    } else if (e.type === 'image') {
                                        if (typeof json !== 'undefined') {
                                            if (typeof json.image_url !== 'undefined'){ 
                                                e.define = <string>json.image_url; //better image
                                            } else {
                                                //set default image only if valid json, but no image
                                                e.define = "assets/food.png";
                                            }
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
            case "home":
                func = this.getMatchedFunction("page2list",elementName)
                func(this._actionService);
                break;
            case "mapButton":
                this._actionService.reRenderPage(this.pages[2]);
                func = this.getMatchedFunction("page2list",elementName)
                func(this._actionService);
                break;
            case "backToResults":
                func = this.getMatchedFunction("page3Map",elementName)
                func(this._actionService);
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
            let address:string = _item.location.address[0]?_item.location.address[0]:"";

            let latitude: number = _item.location.coordinate.latitude?_item.location.coordinate.latitude:0;
            let longitude: number = _item.location.coordinate.longitude?_item.location.coordinate.longitude:0;
            for(let e of this.pages[2].rawLayout){
                if(e.type === 'image'){
                    let address = ""+latitude + "," + longitude;
                    e.define = this.googleMapsHelper(address);
                    break;
                }
            }

            define ='<br/>'+'<strong>Title: \</strong>' + title + '<br/>'+'<strong>Phone: \</strong>'
                     + phone + '   |  '  + '<strong\>Address: \</strong>' + address
                     + '<br/>' +'<strong>Rating: \</strong>' + rating
                     + '   |  ' +'<strong>Category: \</strong>' + category
                     + '<br/>' +'<strong>Comment: \</strong>' + comment;
        } else {
            define = '<br/>' + "Sorry, Yelp can't recognize your keyword, please go back and search again."
            this.pages[1] = new page2list(); //so that crying image returns after successful then failed search
        }
        return define;
    }

    googleMapsHelper(address: string): string{
        let mapURL: string = "https://maps.googleapis.com/maps/api/staticmap?&size=300x230&maptype=roadmap" +
                     "&visible=Octagon,Dunedin,NZ" +
                     "&markers=color:yellow%7Clabel:U%7C-45.8743,170.5036" + 
                     "&markers=color:blue%7Clabel:F%7C";
        let apiKey: string = "&key=AIzaSyDHTnM42xU_IGgOk0OGswZGOAtDRr8e66I";
        return mapURL + address + apiKey;
    }
}
