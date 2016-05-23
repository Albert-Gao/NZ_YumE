/// <reference path="../typings/jasmine/jasmine.d.ts" />
"use strict";
var FindViewModel_ts_1 = require('../Application/TS/ViewModels/FindViewModel.ts');
var HistoryViewModel_ts_1 = require('../Application/TS/ViewModels/HistoryViewModel.ts');
var RecommendViewModel_ts_1 = require('../Application/TS/ViewModels/RecommendViewModel.ts');
var StorageService_ts_1 = require('../Emulator/TS/Services/StorageService.ts');
describe('Tests for the FindViewModel', function () {
    it('getKeyword() should return a string', function () {
        var returnValue = (new FindViewModel_ts_1.FindViewModel()).getKeyword();
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
        var testFindViewModel = new FindViewModel_ts_1.FindViewModel();
        var findKeywordByVoice = testFindViewModel.getKeywordByVoice(new mockSpeech());
        expect(findKeywordByVoice).toEqual(checkThisValue);
    });
});
describe('Test for the HistoryViewModel', function () {
    it('getHistoryList() should return something', function () {
        var vm = new HistoryViewModel_ts_1.HistoryViewModel(new StorageService_ts_1.StorageService());
        var returnValue = vm.getHistoryList();
        expect(returnValue).not.toBeNull();
    });
});
describe('Test for the RecommendViewModel', function () {
    it('getHistoryList() should return something', function () {
        var vm = new RecommendViewModel_ts_1.RecommendViewModel(new StorageService_ts_1.StorageService());
        var returnValue = vm.getHistoryList();
        expect(returnValue).not.toBeNull();
    });
});
