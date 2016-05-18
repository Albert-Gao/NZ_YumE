"use strict";
var FindViewModel_1 = require('../Application/TS/ViewModels/FindViewModel');
describe('Tests for the FindViewModel', function () {
    it('getKeyword() should return a string', function () {
        var returnValue = (new FindViewModel_1.FindViewModel()).getKeyword();
        expect(returnValue).toEqual(jasmine.any(String));
    });
    it('getKeywordByVoice() should return a string', function () {
        var checkThisValue;
        var mockSpeech = (function () {
            function mockSpeech() {
            }
            mockSpeech.prototype.recognize = function () {
                return checkThisValue;
            };
            return mockSpeech;
        }());
        var testFindViewModel = new FindViewModel_1.FindViewModel();
        var findKeywordByVoice = testFindViewModel.getKeywordByVoice(new mockSpeech());
        expect(findKeywordByVoice).toEqual(checkThisValue);
    });
});
