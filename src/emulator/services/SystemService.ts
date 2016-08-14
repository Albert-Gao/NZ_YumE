import {ISystemService} from "../models/serviceModels/ISystemService";
import {IApp} from "../models/dataModels/IApp";
import {IPage} from "../models/dataModels/IPage";
import {IStateService} from "../models/serviceModels/IStateService";
import {ITemplatingService} from "../models/serviceModels/ITemplatingService";
/**
 * Created by albertgao on 5/08/16.
 */

/**
 *
 */
export class SystemService implements ISystemService{
    _templatingService: ITemplatingService;
    _stateService: IStateService;

    constructor(templatingService: ITemplatingService, stateService: IStateService) {
        this._templatingService = templatingService;
        this._stateService = stateService;
    }

    removeCurrentPageFromScreen() {
        this._templatingService.removeElementFromDOM(".container-fluid");
    }

    goPage(name: string) {
        this.removeCurrentPageFromScreen();
        for (let page of this._stateService.getPages()){
            if (page.name === name){
                $(".emulator").append(page.afterRenderLayout);
                this.renewCurrentPage(page.name);
            }
        }
    }

    renderAllPages(){
        this._templatingService.createPagesAndSave();
    }

    goStartPage() {
        this.goPage(this._stateService.getStartPageName());
    }

    renewCurrentPage(name: string) {
        this._stateService.setCurrentPageName(name);
    }

    showSplashScreen() {
        let backgroundDIV = this._templatingService.createjQueryItem("div",undefined,"splashScreen");
        let brand = this._templatingService.createjQueryItem("p",undefined,"brand","Smartisan");
        $(".emulator").append(backgroundDIV);
        backgroundDIV.append(brand);
        backgroundDIV.fadeIn('slow',function(){
            brand.fadeIn('slow').fadeOut('slow').fadeIn('slow');
        });
    }

    hideSplashScreen(){
        $(".splashScreen").fadeOut('slow').remove();
    }

    showNotification(text:string) {
        let noticeDIV = this._templatingService.createjQueryItem("div", undefined, "bg-danger", text);
        $(".emulator").prepend(noticeDIV);
        setTimeout(()=>{
            noticeDIV.fadeOut('slow').remove();
        },2000);
    }
}