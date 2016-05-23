/// <reference path="../typings/jasmine/jasmine.d.ts" />

import { FindViewModel } from '../Application/TS/ViewModels/FindViewModel.ts';
import { HistoryViewModel } from '../Application/TS/ViewModels/HistoryViewModel.ts';
import { RecommendViewModel } from '../Application/TS/ViewModels/RecommendViewModel.ts';
import { ISpeechService } from '../Emulator/TS/Services/ISpeechService.ts';
import { StorageService } from '../Emulator/TS/Services/StorageService.ts';
import { IListItem } from '../Application/TS/Models/IListItem.ts';

describe('Tests for the FindViewModel', () => {
    it('getKeyword() should return a string', () => {
        let returnValue: string = (new FindViewModel()).getKeyword();
        expect(returnValue).toEqual(jasmine.any(String));
    });

    it('getKeywordByVoice() should return a string', () => {
        let checkThisValue: string;
        class mockSpeech implements ISpeechService {
            recognize(): string {
                return checkThisValue;
            }
        }

        let testFindViewModel = new FindViewModel();
        let findKeywordByVoice = testFindViewModel.getKeywordByVoice(new mockSpeech());
        expect(findKeywordByVoice).toEqual(checkThisValue);
    });
});

describe('Test for the HistoryViewModel', () => {
    it('getHistoryList() should return something', () => {
        let vm = new HistoryViewModel(new StorageService());
        let returnValue: IListItem[] = vm.getHistoryList();
        expect(returnValue).not.toBeNull();
    });
});

describe('Test for the RecommendViewModel', () => {
    it('getHistoryList() should return something', () => {
        let vm = new RecommendViewModel(new StorageService());
        let returnValue: IListItem[] = vm.getHistoryList();
        expect(returnValue).not.toBeNull();
    });
});