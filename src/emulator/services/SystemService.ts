import {ISystemService} from "../models/serviceModels/ISystemService";
import {IApp} from "../models/dataModels/IApp";
import {IPage} from "../models/dataModels/IPage";
/**
 * Created by albertgao on 5/08/16.
 */
export class SystemService implements ISystemService{
    _app: IApp;

    constructor(app: IApp) {
        this._app = app;
    }

    removeCurrentPage() {
        $(".container-fluid").remove();
    }

    goPage(name: string) {
        this.removeCurrentPage();
        let page:IPage = _.find(this._app.pages,function(page:IPage){
            page.name = name;
        });
        $(".emulator").append(page.afterRenderLayout);
        this.renewCurrentPage(page.name);
    }

    renewCurrentPage(name: string) {
        this._app.currentPage = name;
    }

    showSplashScreen(): void {
        let backgroundDIV = $(document.createElement("div"));
        backgroundDIV.addClass("splashScreen");
        $(".emulator").append(backgroundDIV);
        backgroundDIV.fadeIn('slow',function(){
            let brand = $(document.createElement("p"));
            brand.addClass('brand').text('Smartisan');
            backgroundDIV.append(brand);
            brand.slideDown('slow').fadeOut('slow').fadeIn('slow');
        });
    }

    hideSplashScreen(){
        $(".splashScreen").fadeOut('slow').remove();
    }

    showErrorScreen(): void {
    }
}