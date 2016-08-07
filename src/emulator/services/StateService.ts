import {IStateService} from "../models/serviceModels/IStateService";
import {IPage} from "../models/dataModels/IPage";
import {IApp} from "../models/dataModels/IApp";
import {IElement} from "../models/dataModels/IElement";

export class StateService implements IStateService{
    _app: IApp;

    constructor(app: IApp) {
        this._app = app;
    }

    getCurrentPageName(): string {
        return this._app.currentPageName;
    }

    setCurrentPageName(name: string) {
        this._app.currentPageName = name;
    }

    getCurrentPage(): IPage {
        let targetName:string = this._app.currentPageName;
        return _.find(this._app.pages,function(page:IPage){
            page.name = targetName;
        });
    }

    getPage(name: string): IPage {
        return _.find(this._app.pages,function(page:IPage){
            page.name = name;
        });
    }

    getPages(): Array<IPage> {
        return this._app.pages;
    }

    emulatorCentralCallBack(element: IElement, targetElementInfo?: string) {
        if (targetElementInfo){
            this._app.CentralCallbackFunc(element.name, targetElementInfo);
        } else {
            this._app.CentralCallbackFunc(element.name);
        }
    }
}
