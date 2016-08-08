import {IApp} from "../models/dataModels/IApp";
import {IActionService} from "../../emulator/models/serviceModels/IActionService";
import {IStateService} from "../../emulator/models/serviceModels/IStateService";
import {ISystemService} from "../../emulator/models/serviceModels/ISystemService";
import {ITemplatingService} from "../../emulator/models/serviceModels/ITemplatingService";
import {ActionService} from "../../emulator/services/ActionService";
import {StateService} from "../../emulator/services/StateService";
import {SystemService} from "../../emulator/services/SystemService";
import {TemplatingService} from "../../emulator/services/TemplatingService";
import {application} from "../../application/application";


export class emulator{
    _actionService:IActionService;
    _stateService:IStateService;
    _systemService:ISystemService;
    _templatingService:ITemplatingService;
    _app:IApp;

    constructor() {
        this._app = new application();
        this._stateService = new StateService(this._app);
        this._templatingService = new TemplatingService(this._stateService);
        this._systemService = new SystemService(this._templatingService,this._stateService);
        this._actionService = new ActionService(this._systemService);
    }
}
