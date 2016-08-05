import {IStateService} from "../models/serviceModels/IStateService";
import {IPage} from "../models/dataModels/IPage";
import {IApp} from "../models/dataModels/IApp";

export class StateService implements IStateService{
    _app: IApp;

    constructor(app: IApp) {
        this._app = app;
    }

    getCurrentPage(): IPage {
        return null;
    }

    getPage(name: string): IPage {
        return null;
    }

    getPageCallbacks(pageName: string): {any: any}[] {
        return null;
    }

    getPageCallback(pageName: string, elementID: string): Array<{any: any}> {
        return null;
    }
}
