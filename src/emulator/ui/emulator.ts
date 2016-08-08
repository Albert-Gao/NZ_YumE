import {IApp} from "../models/dataModels/IApp";
import {IStateService} from "../../emulator/models/serviceModels/IStateService";
import {ITemplatingService} from "../../emulator/models/serviceModels/ITemplatingService";
import {ISystemService} from "../../emulator/models/serviceModels/ISystemService";
import {IActionService} from "../../emulator/models/serviceModels/IActionService";
import {application} from "../../application/application";
import {StateService} from "../../emulator/services/StateService";
import {TemplatingService} from "../../emulator/services/TemplatingService";
import {SystemService} from "../../emulator/services/SystemService";
import {ActionService} from "../../emulator/services/ActionService";


export class emulator{
    _app:IApp;
    _stateService:IStateService;
    _templatingService:ITemplatingService;
    _systemService:ISystemService;
    _actionService:IActionService;

    constructor() {
        this._app = new application();
        this._stateService = new StateService(this._app);
        this._templatingService = new TemplatingService(this._stateService);
        this._systemService = new SystemService(this._templatingService,this._stateService);
        this._actionService = new ActionService(this._systemService);
        this.startEmulator();
    }

    startEmulator(){
        this._systemService.showSplashScreen();
        setTimeout(function(){
            this._systemService.hideSplashScreen();
        },3900);
    }
}
