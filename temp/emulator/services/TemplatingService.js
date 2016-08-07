"use strict";
var TemplatingService = (function () {
    function TemplatingService(stateService) {
        this._stateService = stateService;
    }
    TemplatingService.prototype.generatePage = function (page) {
        var outDiv = this.generateLayout();
        _.forEach(page.rawLayout, function (element) {
            var row = this.createjQueryItem("div", undefined, "row", undefined);
            switch (element.type) {
                case "button":
                    var temp = this.createjQueryItem("button", [{ "id": element.name }], "btn btn-primary btn-lg btn-block", element.define);
                    if (element.targetElementID) {
                        var targetText = $(element.targetElementID).text();
                        temp.click(this._stateService.emulatorCentralCallBack(element, targetText));
                    }
                    else {
                        temp.click(this._stateService.emulatorCentralCallBack(element));
                    }
                    row.append(temp);
                    break;
                case "text":
                    var temp1 = this.createjQueryItem("p", [{ "id": element.name }], undefined, element.define);
                    row.append(temp1);
                    break;
                case "image":
                    var temp2 = this.createjQueryItem("img", [{ "id": element.name }, { "src": element.define }], "img-fluid");
                    row.append(temp2);
                    break;
                case "input":
                    var temp3 = this.createjQueryItem("div", undefined, "form-group");
                    var label = this.createjQueryItem("label", [{ "for": element.name }], "sr-only", element.define);
                    temp3.append(label);
                    var input = this.createjQueryItem("input", [{ "type": "text" },
                        { "id": element.name },
                        { "for": element.name },
                        { "placeholder": element.define }], "form-control", element.define);
                    temp3.append(input);
                    row.append(temp3);
                    break;
                case "list":
                    var listGroup_1 = this.createjQueryItem("div", undefined, "list-group");
                    var listItemsData = (element.define);
                    _.forEach(listItemsData, function (item) {
                        var a = this.createjQueryItem("a", undefined, "list-group-item list-group-item-action");
                        a.click(this._stateService.emulatorCentralCallBack(element));
                        var h5 = this.createjQueryItem("h5", undefined, "list-group-item-heading", item.title);
                        var p = this.createjQueryItem("p", undefined, "list-group-item-text", item.description);
                        a.append(h5);
                        a.append(p);
                        listGroup_1.append(a);
                    });
                    break;
            }
            outDiv.append(row);
        });
        return outDiv;
    };
    TemplatingService.prototype.generatePages = function () {
        _.forEach(this._stateService.getPages(), function (page) {
            page.afterRenderLayout = this.generatePage(page);
        });
    };
    TemplatingService.prototype.generateLayout = function () {
        return this.createjQueryItem('div', undefined, "container-fluid");
    };
    TemplatingService.prototype.removeElementFromDOM = function (className) {
        $(className).remove();
    };
    TemplatingService.prototype.createjQueryItem = function (type, attrs, styleClasses, text) {
        var domElement = $(document.createElement(type));
        if (styleClasses) {
            domElement.addClass(styleClasses);
        }
        if (attrs) {
            _.forEach(attrs, function (item) {
                domElement.attr(item.key, item.value);
            });
        }
        if (text) {
            domElement.text(text);
        }
        return domElement;
    };
    return TemplatingService;
}());
exports.TemplatingService = TemplatingService;
//# sourceMappingURL=TemplatingService.js.map