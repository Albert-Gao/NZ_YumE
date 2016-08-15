!function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";var r=a(2),n=a(4),i=a(5),o=a(6),c=a(7),s=function(){function e(){this._app=new r.application,this._stateService=new n.StateService(this._app),this._templatingService=new i.TemplatingService(this._stateService),this._systemService=new o.SystemService(this._templatingService,this._stateService),this._actionService=new c.ActionService(this._systemService),this._app.injectActionService(this._actionService),this._app.startAddingPages()}return e.prototype.startEmulator=function(){this._systemService.showSplashScreen(),setTimeout(this._systemService.hideSplashScreen,3900)},e.prototype.startRenderApp=function(){this._systemService.renderAllPages(),this._systemService.goStartPage()},e}();t.emulator=s;var u=new s;u.startEmulator(),u.startRenderApp()},,function(e,t,a){"use strict";var r=a(3),n=function(){function e(){this.title="YumE",this.currentPageName="",this.startPageName="page1search",this.pages=[],this.CentralCallbackFunc=this.appCallback}return e.prototype.injectActionService=function(e){this._actionService=e},e.prototype.startAddingPages=function(){this.pages.push(new r.page1search(this._actionService))},e.prototype.createPageArray=function(){},e.prototype.appCallback=function(e,t){console.log("I am here at application")},e}();t.application=n},function(e,t){"use strict";var a=function(){function e(e){this.name="page1search",this.rawLayout=this.returnRawLayout(),this.afterRenderLayout=null,this.callback=this.returnCallbackFuncs(),this._actionService=e}return e.prototype.returnRawLayout=function(){return[{type:"image",name:"page1image",define:"./assets/YuMe_logo.jpg"},{type:"text",name:"page1text",define:"Search your favourite, eat your favourite :)"},{type:"input",name:"page1input",define:"Enter the name"},{type:"button",name:"page1button",targetElementID:"page1text",define:"YumE it!"}]},e.prototype.returnCallbackFuncs=function(){return[{bindToName:"page1button",targetID:"page1text",callbackFunction:this.searchButtonCallBack},{bindToName:"page1jumpbutton",callbackFunction:this.jumpButtonCallBack}]},e.prototype.searchButtonCallBack=function(e){e?this._actionService.goPage("page2list"):this._actionService.showNotification("Please enter the name of restaurant.")},e.prototype.jumpButtonCallBack=function(){this._actionService.goPage("page4fav")},e}();t.page1search=a},function(e,t){"use strict";var a=function(){function e(e){this._app=e}return e.prototype.getStartPageName=function(){return this._app.startPageName},e.prototype.getCurrentPageName=function(){return this._app.currentPageName},e.prototype.setCurrentPageName=function(e){this._app.currentPageName=e},e.prototype.getCurrentPage=function(){for(var e,t=this._app.currentPageName,a=0,r=this._app.pages;a<r.length;a++){var n=r[a];n.name===t&&(e=n)}return e},e.prototype.getPage=function(e){for(var t,a=0,r=this._app.pages;a<r.length;a++){var n=r[a];n.name===e&&(t=n)}return t},e.prototype.getPages=function(){return this._app.pages},e.prototype.emulatorCentralCallBack=function(e,t){console.log("i am here"),t?this._app.CentralCallbackFunc(e.name,t):this._app.CentralCallbackFunc(e.name)},e.prototype.getAppCallBack=function(){return this._app.CentralCallbackFunc},e}();t.StateService=a},function(e,t){"use strict";var a=function(){function e(e){this._stateService=e}return e.prototype.createPage=function(e){for(var t=this,a=this.createLayout(),r=function(e){var r=n.createjQueryItem("div",void 0,"row",void 0),i=e;switch(i.type){case"button":var o=n.createjQueryItem("button",[{key:"id",value:i.name}],"btn btn-primary btn-lg btn-block",i.define);if(i.targetElementID){var c=$(i.targetElementID).text();$(".emulator").on("click","#"+i.name,function(){t._stateService.emulatorCentralCallBack(i,c)})}else $(".emulator").on("click","#"+i.name,function(){t._stateService.emulatorCentralCallBack(i)});r.append(o);break;case"text":var s=n.createjQueryItem("p",[{key:"id",value:i.name}],void 0,i.define);r.append(s);break;case"image":var u=n.createjQueryItem("img",[{key:"id",value:i.name},{key:"src",value:i.define}],"img-fluid");r.append(u);break;case"input":var p=n.createjQueryItem("div",void 0,"form-group"),l=n.createjQueryItem("label",[{key:"for",value:i.name}],"sr-only",i.define);p.append(l);var m=n.createjQueryItem("input",[{key:"type",value:"text"},{key:"id",value:i.name},{key:"for",value:i.name},{key:"placeholder",value:i.define}],"form-control",i.define);p.append(m),r.append(p);break;case"list":for(var h=n.createjQueryItem("div",void 0,"list-group"),v=i.define,g=0,f=v;g<f.length;g++){var y=f[g],d=n.createjQueryItem("a",void 0,"list-group-item list-group-item-action");d.click(n._stateService.emulatorCentralCallBack(i));var S=n.createjQueryItem("h5",void 0,"list-group-item-heading",y.title),_=n.createjQueryItem("p",void 0,"list-group-item-text",y.description);d.append(S),d.append(_),h.append(d)}}a.append(r)},n=this,i=0,o=e.rawLayout;i<o.length;i++){var c=o[i];r(c)}return a},e.prototype.createPagesAndSave=function(){for(var e=0,t=this._stateService.getPages();e<t.length;e++){var a=t[e];a.afterRenderLayout=this.createPage(a)}},e.prototype.createLayout=function(){return this.createjQueryItem("div",void 0,"container-fluid")},e.prototype.removeElementFromDOM=function(e){$(e).remove()},e.prototype.createjQueryItem=function(e,t,a,r){var n=$(document.createElement(e));if(a&&n.addClass(a),t)for(var i=0,o=t;i<o.length;i++){var c=o[i];n.attr(c.key,c.value)}return r&&n.text(r),n},e}();t.TemplatingService=a},function(e,t){"use strict";var a=function(){function e(e,t){this._templatingService=e,this._stateService=t}return e.prototype.removeCurrentPageFromScreen=function(){this._templatingService.removeElementFromDOM(".container-fluid")},e.prototype.goPage=function(e){this.removeCurrentPageFromScreen();for(var t=0,a=this._stateService.getPages();t<a.length;t++){var r=a[t];r.name===e&&($(".emulator").append(r.afterRenderLayout),this.renewCurrentPage(r.name))}},e.prototype.renderAllPages=function(){this._templatingService.createPagesAndSave()},e.prototype.goStartPage=function(){this.goPage(this._stateService.getStartPageName())},e.prototype.renewCurrentPage=function(e){this._stateService.setCurrentPageName(e)},e.prototype.showSplashScreen=function(){var e=this._templatingService.createjQueryItem("div",void 0,"splashScreen"),t=this._templatingService.createjQueryItem("p",void 0,"brand","Smartisan");$(".emulator").append(e),e.append(t),e.fadeIn("slow",function(){t.fadeIn("slow").fadeOut("slow").fadeIn("slow")})},e.prototype.hideSplashScreen=function(){$(".splashScreen").fadeOut("slow").remove()},e.prototype.showNotification=function(e){var t=this._templatingService.createjQueryItem("div",void 0,"bg-danger",e);$(".emulator").prepend(t),setTimeout(function(){t.fadeOut("slow").remove()},2e3)},e}();t.SystemService=a},function(e,t){"use strict";var a=function(){function e(e){this._systemService=e}return e.prototype.goPage=function(e){this._systemService.goPage(e)},e.prototype.showNotification=function(e){this._systemService.showNotification(e)},e.prototype.saveToLocalStorage=function(e,t){localStorage.setItem(e,t)},e.prototype.getFromLocalStorage=function(e){return localStorage.getItem(e)},e.prototype.callYelpSearchAPI=function(e){var t={consumerKey:"sNul62e6H0We5KJLGYP_Bw",consumerSecret:"RxvIBp4BxRvNVxjaPlUWuiPFcYg",accessToken:"nguVll4te_e1oDcv2EkS4xKC6GOoQhcN",accessTokenSecret:"DrumlhFl5Kwb1ksCpRKEtiW6B58",serviceProvider:{signatureMethod:"HMAC-SHA1"}},a=e,r="Dunedin",n={consumerSecret:t.consumerSecret,tokenSecret:t.accessTokenSecret},i=[];i.push(["term",a]),i.push(["location",r]),i.push(["callback","cb"]),i.push(["oauth_consumer_key",t.consumerKey]),i.push(["oauth_consumer_secret",t.consumerSecret]),i.push(["oauth_token",t.accessToken]),i.push(["oauth_signature_method","HMAC-SHA1"]);var o={action:"https://api.yelp.com/v2/search",method:"GET",parameters:i};OAuth.setTimestampAndNonce(o),OAuth.SignatureMethod.sign(o,n);var c=OAuth.getParameterMap(o.parameters),s={};return $.ajax({url:o.action,data:c,dataType:"jsonp",jsonpCallback:"cb",cache:!0}).done(function(e,t,a){s=e}).fail(function(e,t,a){console.log("error["+a+"], status["+t+"], jqXHR["+JSON.stringify(e)+"]")}),s},e}();t.ActionService=a}]);
//# sourceMappingURL=index.bundle.js.map