import {ISpeechService} from '../../../Emulator/TS/Services/ISpeechService';

export class FindViewModel {
    getKeyword(): string {
        //get the value of TextBlock.text
        return "get!";
    }

    getKeywordByVoice(speech: ISpeechService): string {
        let keyword: string = speech.recognize();
        return keyword;
    }
}