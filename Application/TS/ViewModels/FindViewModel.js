"use strict";
var FindViewModel = (function () {
    function FindViewModel() {
    }
    FindViewModel.prototype.getKeyword = function () {
        //get the value of TextBlock.text
        return "get!";
    };
    FindViewModel.prototype.getKeywordByVoice = function (speech) {
        var keyword = speech.recognize();
        return keyword;
    };
    return FindViewModel;
}());
exports.FindViewModel = FindViewModel;
