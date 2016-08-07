///<reference path="../ui/types/jquery.d.ts"/>
///<reference path="../ui/types/lodash.d.ts"/>
import {IPage} from '../models/dataModels/IPage'
import {ITemplatingService} from "../models/serviceModels/ITemplatingService";
import {IElement} from "../models/dataModels/IElement";
import {IStateService} from "../models/serviceModels/IStateService";
import {IListItem} from "../models/dataModels/IListItem";

export class TemplatingService implements ITemplatingService {
    _stateService: IStateService;

    constructor(stateService: IStateService) {
        this._stateService = stateService;
    }

    generatePage(page: IPage): JQuery {
        let outDiv: JQuery = this.generateLayout();
        _.forEach(page.rawLayout, function (element: IElement) {
            let row = this.createjQueryItem("div", undefined, "row", undefined);
            switch (element.type) {
                case "button":
                    let temp = this.createjQueryItem("button",
                        [{"id":element.name}],
                        "btn btn-primary btn-lg btn-block",
                        <string>element.define);
                    if (element.targetElementID) {
                        let targetText = $(element.targetElementID).text();
                        temp.click(this._stateService.emulatorCentralCallBack(element, targetText));
                    } else {
                        temp.click(this._stateService.emulatorCentralCallBack(element));
                    }
                    row.append(temp);
                    break;
                case "text":
                    let temp1 = this.createjQueryItem("p",
                        [{"id":element.name}],
                        undefined,
                        <string>element.define);
                    row.append(temp1);
                    break;
                case "image":
                    let temp2 = this.createjQueryItem("img",
                        [{"id":element.name}, {"src":<string>element.define}],
                        "img-fluid");
                    row.append(temp2);
                    break;
                case "input":
                    let temp3 = this.createjQueryItem("div",undefined,"form-group");

                    let label = this.createjQueryItem("label",
                        [{"for":element.name}],
                        "sr-only",
                        <string>element.define);
                    temp3.append(label);

                    let input = this.createjQueryItem("input",
                        [{"type":"text"},
                            {"id":element.name},
                            {"for":element.name},
                            {"placeholder":<string>element.define}],
                        "form-control",
                        <string>element.define);
                    temp3.append(input);
                    row.append(temp3);
                    break;
                case "list":
                    let listGroup = this.createjQueryItem("div", undefined, "list-group");
                    let listItemsData = <Array<IListItem>>(element.define);
                    _.forEach(listItemsData, function (item: IListItem) {
                        let a = this.createjQueryItem("a",undefined,"list-group-item list-group-item-action");
                        a.click(this._stateService.emulatorCentralCallBack(element));
                        let h5 = this.createjQueryItem("h5",undefined,"list-group-item-heading",item.title);
                        let p = this.createjQueryItem("p",undefined,"list-group-item-text",item.description);
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
        _.forEach(this._stateService.getPages(),function(page:IPage){
            page.afterRenderLayout = this.generatePage(page);
        });
    }

    generateLayout(): JQuery {
        return this.createjQueryItem('div', undefined, "container-fluid");
    }

    removeElementFromDOM(className:string) {
        $(className).remove();
    }

    createjQueryItem(type:string,
                     attrs?:Array<{key:string,value:string}>,
                     styleClasses?:string,
                     text?:string): JQuery{
        let domElement = $(document.createElement(type));
        if (styleClasses){
            domElement.addClass(styleClasses);
        }
        if (attrs){
            _.forEach(attrs,function(item:{key:string,value:string}){
                domElement.attr(item.key, item.value);
            });
        }
        if (text) {
            domElement.text(text);
        }
        return domElement;
    }
}
