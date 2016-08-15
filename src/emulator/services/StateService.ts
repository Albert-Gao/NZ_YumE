import {IStateService} from "../models/serviceModels/IStateService";
import {IPage} from "../models/dataModels/IPage";
import {IApp} from "../models/dataModels/IApp";
import {IElement} from "../models/dataModels/IElement";


export class StateService implements IStateService{
    _app: IApp;

    constructor(app: IApp) {
        this._app = app;
    }

    getStartPageName(): string {
        return this._app.startPageName;
    }

    getCurrentPageName(): string {
        return this._app.currentPageName;
    }

    setCurrentPageName(name: string) {
        this._app.currentPageName = name;
    }

    getCurrentPage(): IPage {
        let targetName:string = this._app.currentPageName;
        let returnPage:IPage;
        for (let page of this._app.pages){
            if (page.name === targetName){
                returnPage = page;
            }
        }
        return returnPage;
    }

    getPage(name: string): IPage {
        let returnPage:IPage;
        for (let page of this._app.pages){
            if (page.name === name){
                returnPage = page;
            }
        }
        return returnPage;
    }

    getPages(): Array<IPage> {
        return this._app.pages;
    }
    //
    // setRenderPage(pageName:string, pageLayouts:Array<JQuery>) {
    //     _.map(this._app.pages, function(page:IPage){
    //       _.forEach(pageLayouts,function(singleLayout:JQuery){
    //           page.afterRenderLayout = singleLayout;
    //       });
    //     })
    // }

    emulatorCentralCallBack(element: IElement, targetElementInfo?: string)  {
        console.log("i am here");
        if (targetElementInfo){
            this._app.CentralCallbackFunc(element.name, targetElementInfo);
        } else {
            this._app.CentralCallbackFunc(element.name);
        }
    }

    getAppCallBack():(pageName:string, elementID?:string)=>void{
        return this._app.CentralCallbackFunc;
    }
}
