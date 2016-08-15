import {ISystemService} from "../models/serviceModels/ISystemService";
import {IApp} from "../models/dataModels/IApp";
import {IPage} from "../models/dataModels/IPage";
import {IStateService} from "../models/serviceModels/IStateService";
import {ITemplatingService} from "../models/serviceModels/ITemplatingService";

export class SystemService implements ISystemService{
    _templatingService: ITemplatingService;
    _stateService: IStateService;

    /**
     * [constructor description]
     * @method constructor
     * @param  {ITemplatingService} templatingService [description]
     * @param  {IStateService}      stateService      [description]
     * @return {[type]}                               [description]
     */
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
                $(".emulator").prepend(page.afterRenderLayout);
                this.renewCurrentPage(page.name);
            }
        }
    }

    renderAllPages(page?:IPage){
        if (page){
            let page1:JQuery = this._templatingService.createPage(page);
            this._stateService.getPage(page.name).afterRenderLayout = page1;
        } else {
            this._templatingService.createPagesAndSave();
        }
    }

    goStartPage() {
        this.goPage(this._stateService.getStartPageName());
    }

    renewCurrentPage(name: string) {
        this._stateService.setCurrentPageName(name);
    }

    startEmulator() {
        let backgroundDIV = this._templatingService.createjQueryItem("div",undefined,"splashScreen");
        let brand = this._templatingService.createjQueryItem("p",undefined,"brand","Smartisan");
        $(".emulator").append(backgroundDIV);
        backgroundDIV.append(brand);
        backgroundDIV.fadeIn('slow',()=>{
            brand.fadeIn('slow')
                .fadeOut('slow')
                .fadeIn('slow',()=>{
                    this.hideSplashScreen();
                    this.renderAllPages();
                    this.goStartPage();
                });
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
