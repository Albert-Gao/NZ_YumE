"use strict";
var TemplatingService = (function () {
    function TemplatingService(stateService) {
        this._stateService = stateService;
    }
    TemplatingService.prototype.createPage = function (page) {
        var outDiv = this.createLayout();
        var _loop_1 = function(element) {
            var row = this_1.createjQueryItem("div", undefined, "row", undefined);
            switch (element.type) {
                case "button":
                    var temp = this_1.createjQueryItem("button", [{ key: "id", value: element.name }], "btn btn-primary btn-lg btn-block", element.define);
                    if (element.targetElementID) {
                        var targetText = $(element.targetElementID).text();
                        temp.click(this_1._stateService.emulatorCentralCallBack(element, targetText));
                    }
                    else {
                        temp.click(this_1._stateService.emulatorCentralCallBack(element));
                    }
                    row.append(temp);
                    break;
                case "text":
                    var temp1 = this_1.createjQueryItem("p", [{ key: "id", value: element.name }], undefined, element.define);
                    row.append(temp1);
                    break;
                case "image":
                    var temp2 = this_1.createjQueryItem("img", [{ key: "id", value: element.name }, { key: "src", value: element.define }], "img-fluid");
                    row.append(temp2);
                    break;
                case "input":
                    var temp3 = this_1.createjQueryItem("div", undefined, "form-group");
                    var label = this_1.createjQueryItem("label", [{ key: "for", value: element.name }], "sr-only", element.define);
                    temp3.append(label);
                    var input = this_1.createjQueryItem("input", [{ key: "type", value: "text" }, { key: "id", value: element.name }, { key: "for", value: element.name }, { key: "placeholder", value: element.define }], "form-control", element.define);
                    temp3.append(input);
                    row.append(temp3);
                    break;
                case "list":
                    var listGroup_1 = this_1.createjQueryItem("div", undefined, "list-group");
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
        };
        var this_1 = this;
        for (var _i = 0, _a = page.rawLayout; _i < _a.length; _i++) {
            var element = _a[_i];
            _loop_1(element);
        }
        return outDiv;
    };
    TemplatingService.prototype.createPagesAndSave = function () {
        for (var _i = 0, _a = this._stateService.getPages(); _i < _a.length; _i++) {
            var page = _a[_i];
            page.afterRenderLayout = this.createPage(page);
        }
    };
    TemplatingService.prototype.createLayout = function () {
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
            for (var _i = 0, attrs_1 = attrs; _i < attrs_1.length; _i++) {
                var item = attrs_1[_i];
                domElement.attr(item.key, item.value);
            }
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