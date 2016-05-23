"use strict";
/**
 * The ViewModel for the find page.
 *
 * @export
 * @class FindViewModel
 */
var FindViewModel = (function () {
    function FindViewModel() {
    }
    /**
     * return the keyword that the user inputs.
     *
     * @returns {string} the return value
     */
    FindViewModel.prototype.getKeyword = function () {
        //get the value of TextBlock.text
        return "get!";
    };
    /**
     * return the keyword by using the speech reconition.
     *
     * @param {ISpeechService} speech inject the service to the method.
     * @returns {string} return the actual keyword that the user wants.
     */
    FindViewModel.prototype.getKeywordByVoice = function (speech) {
        var keyword = speech.recognize();
        return keyword;
    };
    return FindViewModel;
}());
exports.FindViewModel = FindViewModel;
