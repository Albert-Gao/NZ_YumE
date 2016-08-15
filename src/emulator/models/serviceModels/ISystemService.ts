import {IStateService} from "./IStateService";
import {ITemplatingService} from "./ITemplatingService";

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
     * @return {[type]}                    [description]
     */
    removeCurrentPageFromScreen();

    /**
     * [goPage description]
     * @method goPage
     * @param  {string} name [description]
     * @return {[type]}      [description]
     */
    goPage(name:string);

    /**
     * [renewCurrentPage description]
     * @method renewCurrentPage
     * @param  {string}         name [description]
     * @return {[type]}              [description]
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
     * @return {[type]}       [description]
     */
    renderAllPages();

    /**
     * [startEmulator description]
     * @method showSplashScreen
     * @return {[type]}         [description]
     */
    startEmulator();

    /**
     * [hideSplashScreen description]
     * @method hideSplashScreen
     * @return {[type]}         [description]
     */
    hideSplashScreen();

    /**
     * [showNotification description]
     * @method showNotification
     * @param  {string}         text [description]
     * @return {[type]}              [description]
     */
    showNotification(text:string);
}
