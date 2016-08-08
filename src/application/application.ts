import {IApp} from "../emulator/models/dataModels/IApp";
import {IPage} from "../emulator/models/dataModels/IPage";

export class application implements IApp{

    title: string;
    currentPageName: string;
    pages: Array<IPage>;
    CentralCallbackFunc: {(pageName: string, elementID?: string):any};

    constructor() {
        this.title = title;
        this.currentPageName = currentPageName;
        this.pages = pages;
        this.CentralCallbackFunc = CentralCallbackFunc;
    }
}