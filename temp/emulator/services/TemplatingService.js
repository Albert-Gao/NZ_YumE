"use strict";
var TemplatingService = (function () {
    function TemplatingService(stateService, app) {
        this._stateService = stateService;
        this._app = app;
    }
    TemplatingService.prototype.generatePage = function (page) {
        var outDiv = this.generateLayout();
        _.forEach(page.rawLayout, function (element) {
            var row = $(document.createElement("div"));
            row.addClass("row");
            switch (element.type) {
                case "button":
                    var temp = $(document.createElement("button"));
                    temp.attr("id", element.name);
                    temp.addClass("btn btn-primary btn-lg btn-block");
                    temp.text(element.define);
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
                    var temp1 = $(document.createElement("p"));
                    temp1.attr("id", element.name);
                    temp1.text((element.define));
                    row.append(temp1);
                    break;
                case "image":
                    var temp2 = $(document.createElement("img"));
                    temp2.addClass("img-fluid");
                    temp2.attr("id", element.name);
                    temp2.attr("src", element.define);
                    row.append(temp2);
                    break;
                case "input":
                    var temp3 = $(document.createElement("div"));
                    temp3.addClass("form-group");
                    var label = $(document.createElement("label"));
                    label.addClass("sr-only");
                    label.attr("for", element.name);
                    label.text(element.define);
                    temp3.append(label);
                    var input = $(document.createElement("input"));
                    input.attr("type", "text");
                    input.addClass("form-control");
                    input.attr("id", element.name);
                    input.attr("placeholder", element.define);
                    temp3.append(input);
                    row.append(temp3);
                    break;
                case "list":
                    var listGroup_1 = $(document.createElement("div"));
                    listGroup_1.addClass("list-group");
                    var listItemsData = (element.define);
                    _.forEach(listItemsData, function (item) {
                        var a = $(document.createElement("a"));
                        a.addClass("list-group-item list-group-item-action");
                        a.click(this._stateService.emulatorCentralCallBack(element));
                        var h5 = $(document.createElement("h5"));
                        h5.addClass("list-group-item-heading");
                        h5.text(item.title);
                        var p = $(document.createElement("p"));
                        p.addClass("list-group-item-text");
                        p.text(item.description);
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
        _.forEach(this._app.pages, function (page) {
            page.afterRenderLayout = this.generatePage(page);
        });
    };
    TemplatingService.prototype.generateLayout = function () {
        var layout = $(document.createElement('div'));
        layout.addClass("container-fluid");
        return layout;
    };
    return TemplatingService;
}());
exports.TemplatingService = TemplatingService;
//# sourceMappingURL=TemplatingService.js.map