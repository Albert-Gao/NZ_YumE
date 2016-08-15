import {IStateService} from "./IStateService";
import {ITemplatingService} from "./ITemplatingService";
import {IPage} from "../dataModels/IPage";

/**
 *
 */
export interface ISystemService{
    /**
     * [_stateService description]
     * @type {IStateService}
     */
    _stateService:IStateService;

    /**
     * [_templatingService description]
     * @type {ITemplatingService}
     */
    _templatingService:ITemplatingService;

    /**
     * [removeCurrentPageFromScreen description]
     * @method removeCurrentPageFromScreen
     */
    removeCurrentPageFromScreen();

    /**
     * [goPage description]
     * @method goPage
     * @param  {string} name [description]
     */
    goPage(name:string);

    /**
     * [renewCurrentPage description]
     * @method renewCurrentPage
     * @param  {string}         name [description]
     */
    renewCurrentPage(name:string);

    /**
     * [goStartPage description]
     * @method goStartPage
     * @return {[type]}    [description]
     */
    goStartPage();

    /**
     * [renderAllPages description]
     * @method renderAllPages
     * @param  {string}       pageName [description]
     * @return {[type]}                [description]
     */
    renderAllPages(page?:IPage);

    /**
     * [startEmulator description]
     * @method showSplashScreen
     */
    startEmulator();

    /**
     * [hideSplashScreen description]
     * @method hideSplashScreen
     */
    hideSplashScreen();

    /**
     * [showNotification description]
     * @method showNotification
     * @param  {string}         text [description]
     */
    showNotification(text:string);
}
