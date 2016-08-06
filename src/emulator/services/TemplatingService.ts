///<reference path="../ui/types/jquery.d.ts"/>
///<reference path="../ui/types/lodash.d.ts"/>
import {IPage} from '../models/dataModels/IPage'
import {ITemplatingService} from "../models/serviceModels/ITemplatingService";
import {IElement} from "../models/dataModels/IElement";
import {IApp} from "../models/dataModels/IApp";
import {IStateService} from "../models/serviceModels/IStateService";
import {IListItem} from "../models/dataModels/IListItem";

export class TemplatingService implements ITemplatingService {
    _stateService: IStateService;
    _app: IApp;

    constructor(stateService: IStateService, app: IApp) {
        this._stateService = stateService;
        this._app = app;
    }

    generatePage(page: IPage): JQuery {
        let outDiv: JQuery = this.generateLayout();
        _.forEach(page.rawLayout, function (element: IElement) {
            let row = $(document.createElement("div"));
            row.addClass("row");
            switch (element.type) {
                case "button":
                    let temp = $(document.createElement("button"));
                    temp.attr("id", element.name);
                    temp.addClass("btn btn-primary btn-lg btn-block");
                    temp.text(<string>element.define);
                    if (element.targetElementID) {
                        let targetText = $(element.targetElementID).text();
                        temp.click(this._stateService.emulatorCentralCallBack(element, targetText));
                    } else {
                        temp.click(this._stateService.emulatorCentralCallBack(element));
                    }
                    row.append(temp);
                    break;
                case "text":
                    let temp1 = $(document.createElement("p"));
                    temp1.attr("id", element.name);
                    temp1.text(<string>(element.define));
                    row.append(temp1);
                    break;
                case "image":
                    let temp2 = $(document.createElement("img"));
                    temp2.addClass("img-fluid");
                    temp2.attr("id", element.name);
                    temp2.attr("src", <string>element.define);
                    row.append(temp2);
                    break;
                case "input":
                    let temp3 = $(document.createElement("div"));
                    temp3.addClass("form-group");
                    let label = $(document.createElement("label"));
                    label.addClass("sr-only");
                    label.attr("for", element.name);
                    label.text(<string>element.define);
                    temp3.append(label);
                    let input = $(document.createElement("input"));
                    input.attr("type", "text");
                    input.addClass("form-control");
                    input.attr("id", element.name);
                    input.attr("placeholder", <string>element.define);
                    temp3.append(input);
                    row.append(temp3);
                    break;
                case "list":
                    let listGroup = $(document.createElement("div"));
                    listGroup.addClass("list-group");
                    let listItemsData = <Array<IListItem>>(element.define);
                    _.forEach(listItemsData, function (item: IListItem) {
                        let a = $(document.createElement("a"));
                        a.addClass("list-group-item list-group-item-action");
                        a.click(this._stateService.emulatorCentralCallBack(element));
                        let h5 = $(document.createElement("h5"));
                        h5.addClass("list-group-item-heading");
                        h5.text(item.title);
                        let p = $(document.createElement("p"));
                        p.addClass("list-group-item-text");
                        p.text(item.description);
                        a.append(h5);
                        a.append(p);
                        listGroup.append(a);
                    });
                    break;
            }
            outDiv.append(row);
        });
        return outDiv;
    }

    generatePages() {
        _.forEach(this._app.pages,function(page:IPage){
            page.afterRenderLayout = this.generatePage(page);
        });
    }

    generateLayout(): JQuery {
        let layout = $(document.createElement('div'));
        layout.addClass("container-fluid");
        return layout;
    }
}
