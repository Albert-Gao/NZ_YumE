///<reference path="../src/emulator/ui/types/jquery.d.ts" />
///<reference path="typings/jasmine-jquery.d.ts" />

import {application} from "../src/application/application";
import {emulator} from "../src/emulator/ui/emulator";

//jasmine.getFixtures().fixturesPath = "../spec/";
//need to launch Chrome/Chromium with --allow-file-access-from-files option
//for fixtures to work. Works in standard FireFox.
//see https://github.com/velesin/jasmine-jquery#cross-domain-policy-problems-under-chrome
//can load a fixture with loadFixtures('myFixture.html');

let es = new emulator(); //this is the entry point for the whole project
describe('Tests for emulator', () => {
    it('An app should be defined', () => {
        expect(es._app).toBeDefined();
    });
    it('stateservice should be defined', () => {
        expect(es._stateService).toBeDefined();
    });
    it('templatingService should be defined', () => {
        expect(es._templatingService).toBeDefined();
    });
    it('systemService should be defined', () => {
        expect(es._systemService).toBeDefined();
    });
    it('actionService should be defined', () => {
        expect(es._actionService).toBeDefined();
    });
    it('The app should have been injected with an ActionService', () => {
        expect((es._app as application)._actionService).toBeDefined();
    });
    it('The app should have been intialised with 3 pages', () => {
        expect(es._app.pages.length).toEqual(3);
    });
    it('The startEmulator fn, should call the function of the same name from systemService', () => {
        spyOn(es._systemService, "startEmulator");
        es.startEmulator();
        expect(es._systemService.startEmulator).toHaveBeenCalled();
    });
});

describe('Tests for starting of the emulator', () => {
    beforeEach(function() {
        setFixtures("<div class='emulator'></div>");
        es.startEmulator();
        let foo = 5; foo = 0; //as need to assign something in here??
    });
    it('Splash Screen should be displayed', () => {
        expect($(".splashScreen")).toExist();
    });
    it('Splash Screen should display the brand', () => {
        expect($(".splashScreen")).toHaveText("Smartisan");
    });
    it('Splash Screen should display the brand', () => {
        expect($(".splashScreen")).toHaveText("Smartisan");
    });
    it('Splash Screen should be hidden after a few seconds, and first page shown', (done) => {
        let POLL_TIME = 10;
        let endTime = new Date().getTime() + 10000;
        let checkCondition = () => {
            if (new Date().getTime() <= endTime && $(".splashScreen").is(":visible")) {
                setTimeout(checkCondition, POLL_TIME);
            } else {   
                expect($(".splashScreen")).not.toBeVisible();
                expect(es._app.currentPageName).toEqual(es._app.startPageName);
                done();
            }
        };
        checkCondition();
    }, 10000);
});