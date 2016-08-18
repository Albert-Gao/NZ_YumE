!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";var n=a(5),r=a(6),o=a(7),i=a(8);jasmine.getFixtures().fixturesPath="../spec/";var c=function(){function e(){}return e}(),s=new c;s.type="text",s.name="testName";var u="Some text to test with";s.define=u;var l=function(){function e(){}return e}(),p=new l;p.name="page1",p.rawLayout=[s];var g=new l;g.name="page2";var m="page1",d="Title",f=function(){function e(){this.title=d,this.currentPageName=m,this.startPageName=m,this.pages=[p,g]}return e.prototype.injectActionService=function(e){},e.prototype.startAddingPages=function(){},e.prototype.CentralCallbackFunc=function(e,t){},e}(),v=new f;describe("Tests for StateService",function(){var e=new n.StateService(v);it("getStartPageName() should return the specified string",function(){var t=e.getStartPageName();expect(t).toEqual(m)}),it("getCurrentPageName() should return the correct string",function(){var t=e.getCurrentPageName();expect(t).toEqual(m)}),it("setCurrentPageName() should set the name of the current page",function(){var t="New Name";e.setCurrentPageName(t);var a=e.getCurrentPageName();expect(a).toEqual(t),e.setCurrentPageName(m)}),it("getCurrentPage() should return an IPage object of the current page",function(){var t=e.getCurrentPage();expect(t.name).toEqual("page1")}),it("getPage() should return an IPage object with the specified name",function(){var t=e.getPage("page2");expect(t.name).toEqual("page2")}),it("getPage() should return undefined if a string that does not match an existing page name is passed to it",function(){var t=e.getPage("page3");expect(t).toEqual(void 0)}),it("getPages() should return an array of all the pages the app contains",function(){var t=e.getPages();expect(t).toEqual([p,g])}),it("emulatorCentralCallBack() to call CentralCallbackFunc()",function(){spyOn(v,"CentralCallbackFunc"),e.emulatorCentralCallBack(s),expect(v.CentralCallbackFunc).toHaveBeenCalledWith(p.name,"testName"),e.emulatorCentralCallBack(s,"test"),expect(v.CentralCallbackFunc).toHaveBeenCalledWith(p.name,"testName","test")}),it("getAppCallBack() should return the correct function",function(){var t=e.getAppCallBack();expect(t("test","test")).toEqual(v.CentralCallbackFunc("test","test"))})});var h=function(){function e(){this._app=v}return e.prototype.getCurrentPage=function(){return p},e.prototype.getCurrentPageName=function(){return p.name},e.prototype.getStartPageName=function(){return p.name},e.prototype.setCurrentPageName=function(e){p.name=e},e.prototype.getPages=function(){return v.pages},e.prototype.getPage=function(e){return p},e.prototype.emulatorCentralCallBack=function(e,t){},e}(),y=new h;describe("Tests for TemplatingService",function(){var e=new r.TemplatingService(y);describe("createPage() should return a jQuery object",function(){var t=new l;t.name="testPage",it("that for button type contains right ID, classes, definition",function(){var a=new c;a.type="button",a.name="buttonElement",a.define="buttonElementDefinition",t.rawLayout=[a];var n=e.createPage(t);expect($("button",n).attr("id")).toEqual(a.name),expect($(".btn",n)).toHaveText(a.define)}),it("that for text type contains right ID, p and text elements",function(){var a=new c;a.type="text",a.name="textElement",a.define="textElementDefinition",t.rawLayout=[a];var n=e.createPage(t);expect($("#textElement",n)).toExist(),expect($("p",n)).toHaveText(a.define)}),it("that for image type contains right ID, class, img attr and img source",function(){var a=new c;a.type="image",a.name="imageElement",a.define="imageElementDefinition",t.rawLayout=[a];var n=e.createPage(t);expect($("#imageElement",n)).toExist(),expect($(".img-fluid",n)).toExist(),expect($("img",n).attr("src")).toEqual(a.define)}),it("that for input type contains the right classes, attributes and text",function(){var a=new c;a.type="input",a.name="inputElement",a.define="inputElementDefinition",t.rawLayout=[a];var n=e.createPage(t);expect($(".form-group",n)).toExist(),expect($(".sr-only",n)).toExist(),expect($(".form-control",n)).toExist(),expect($("label",n).attr("for")).toEqual(a.name),expect($("input",n).attr("type")).toEqual("text"),expect($("input",n).attr("id")).toEqual(a.name),expect($("input",n).attr("for")).toEqual(a.name),expect($("input",n).attr("placeholder")).toEqual(a.define),expect($("input",n)).toHaveText(a.define)}),it("that for list type contains the right classes and descriptions",function(){var a=new c;a.type="list",a.name="listElement",a.define=[{title:"item1",description:"item1Desc",url:"item1url"},{title:"item2",description:"item2Desc",url:"item2url"}],t.rawLayout=[a];var n=e.createPage(t);expect($(".list-group",n)).toExist(),expect($("h5",n)).toHaveHtml("item1"),expect($("h5:nth(1)",n)).toHaveHtml("item2"),expect($("p",n)).toHaveHtml("item1Desc"),expect($("p:nth(1)",n)).toHaveHtml("item2Desc")})}),it("createPagesAndSave() should call createPage the right number of times",function(){spyOn(e,"createPage"),e.createPagesAndSave(),expect(e.createPage.calls.count()).toBe(2)}),it("createLayout() should return a jQuery object with a div of class conatiner-fluid",function(){var t=e.createLayout();expect($(t)).toHaveClass("container-fluid"),expect($(t)).toEqual("div")}),it("removeElementFromDOM() should remove the specified element from the DOM",function(){setFixtures("<div class='container-fluid'></div>"),expect($(".container-fluid")).toExist(),e.removeElementFromDOM(".container-fluid"),expect($(".container-fluid")).not.toExist()}),it("createjQueryItem() should return the correct jQuery object",function(){var t=e.createjQueryItem("div",[{key:"id",value:"testID"}],"testClass","testString");expect($(t)).toHaveId("testID"),expect($(t)).toHaveClass("testClass")})});var P=function(){function e(){}return e.prototype.createPage=function(e){return $(document.createElement("div")).addClass("testingClass")},e.prototype.createPagesAndSave=function(){},e.prototype.createLayout=function(){return $(document.createElement("div"))},e.prototype.removeElementFromDOM=function(e){},e.prototype.createjQueryItem=function(e,t,a,n){return $(document.createElement("div")).addClass("testingClass")},e}(),S=new P;describe("Tests for SystemService method",function(){var e=new o.SystemService(S,y);it("removeCurrentPageFromScreen() should remove the current page from the DOM",function(){spyOn(S,"removeElementFromDOM"),e.removeCurrentPageFromScreen(),expect(S.removeElementFromDOM).toHaveBeenCalledWith(".container-fluid")}),it("goPage() should remove the current page, and show the new one",function(){g.afterRenderLayout=$(document.createElement("div")).addClass("second"),setFixtures("<div class='emulator'></div>"),expect($(".second")).not.toExist(),spyOn(e,"removeCurrentPageFromScreen"),spyOn(e,"renewCurrentPage"),e.goPage("page2"),expect(e.removeCurrentPageFromScreen).toHaveBeenCalled(),expect(e.renewCurrentPage).toHaveBeenCalledWith("page2"),expect($(".second")).toExist()}),describe("renderAllPages() should",function(){it("if called with a page, should rerender the page",function(){spyOn(S,"createPage").and.callThrough(),spyOn(y,"getPage").and.callThrough(),expect($(p.afterRenderLayout)).not.toExist(),e.renderAllPages(p),expect(S.createPage).toHaveBeenCalledWith(p),expect(y.getPage).toHaveBeenCalledWith(p.name),expect($(p.afterRenderLayout)).toExist()}),it("if called with no arguments, call createPagesAndSave()",function(){spyOn(S,"createPagesAndSave"),e.renderAllPages(),expect(S.createPagesAndSave).toHaveBeenCalledWith()})}),it("goStartPage() should call getStartPageName and goPage",function(){spyOn(y,"getStartPageName"),spyOn(e,"goPage"),e.goStartPage(),expect(y.getStartPageName).toHaveBeenCalled(),expect(e.goPage).toHaveBeenCalled()}),it("renewCurrentPage() should call setCurrentPageName from StateService",function(){spyOn(y,"setCurrentPageName"),e.renewCurrentPage("testName"),expect(y.setCurrentPageName).toHaveBeenCalledWith("testName")}),it("startEmulator() should call hideSplashScreen,renderAllPages and goStartPage",function(t){spyOn(e,"hideSplashScreen"),spyOn(e,"renderAllPages"),spyOn(e,"goStartPage"),e.startEmulator();var a=10,n=(new Date).getTime()+1e4,r=function(){(new Date).getTime()<=n&&e.goStartPage.calls.count()<1?setTimeout(r,a):(expect(e.hideSplashScreen).toHaveBeenCalled(),expect(e.renderAllPages).toHaveBeenCalled(),expect(e.goStartPage).toHaveBeenCalled(),t())};r()},1e4),it("hideSplashScreen() should hide the splash screen",function(){setFixtures("<div class='splashScreen'></div>"),expect($(".splashScreen")).toBeVisible(),e.hideSplashScreen(),expect($(".splashScreen")).not.toBeVisible()}),it("showNotification() should show a notification, and then fade it out",function(t){setFixtures("<div class='emulator'></div>"),expect($(".testingClass")).not.toBeVisible(),e.showNotification("blah"),expect($(".testingClass")).toBeVisible();var a=10,n=(new Date).getTime()+5e3,r=function(){(new Date).getTime()<=n&&$(".testingClass").is(":visible")?setTimeout(r,a):(expect($(".testingClass")).not.toBeVisible(),t())};r()},5e3)}),describe("Tests for ActionService",function(){var e=new o.SystemService(S,y),t=new i.ActionService(e);it("goPage() should call goPage from SystemService",function(){spyOn(e,"goPage"),t.goPage("page1"),expect(e.goPage).toHaveBeenCalledWith("page1")}),it("showNotification() should call showNotification from SystemService",function(){spyOn(e,"showNotification"),t.showNotification("showNotification"),expect(e.showNotification).toHaveBeenCalledWith("showNotification")}),it("reRenderPage() should renderAllPages from SystemService",function(){spyOn(e,"renderAllPages"),t.reRenderPage(p),expect(e.renderAllPages).toHaveBeenCalledWith(p)})})},,,,,function(e,t){"use strict";var a=function(){function e(e){this._app=e}return e.prototype.getStartPageName=function(){return this._app.startPageName},e.prototype.getCurrentPageName=function(){return this._app.currentPageName},e.prototype.setCurrentPageName=function(e){this._app.currentPageName=e},e.prototype.getCurrentPage=function(){for(var e,t=this._app.currentPageName,a=0,n=this._app.pages;a<n.length;a++){var r=n[a];if(r.name===t){e=r;break}}return e},e.prototype.getPage=function(e){for(var t,a=0,n=this._app.pages;a<n.length;a++){var r=n[a];if(r.name===e){t=r;break}}return t},e.prototype.getPages=function(){return this._app.pages},e.prototype.emulatorCentralCallBack=function(e,t){var a=this.getStartPageName();t?this._app.CentralCallbackFunc(a,e.name,t):this._app.CentralCallbackFunc(a,e.name)},e.prototype.getAppCallBack=function(){return this._app.CentralCallbackFunc},e}();t.StateService=a},function(e,t){"use strict";var a=function(){function e(e){this._stateService=e}return e.prototype.createPage=function(e){for(var t,a=this,n=this.createLayout(),r=function(e){var r=o.createjQueryItem("div",void 0,"row",void 0),i=e;switch(i.type){case"button":var c=o.createjQueryItem("button",[{key:"id",value:i.name}],"btn btn-primary btn-lg btn-block",i.define);if(i.targetElementID?$(".emulator").on("click","#"+i.name,function(){var e=$("#"+i.targetElementID).val();a._stateService.emulatorCentralCallBack(i,e)}):$(".emulator").on("click","#"+i.name,function(){a._stateService.emulatorCentralCallBack(i)}),$(".btn",n).length){t=$(".btn",n);var s=12/(t.length+1);console.log("length is"+s),t.after(c),t=$(".btn",n),t.removeClass("btn-block"),t.addClass("col-sm-"+s),console.log("got here")}else r.append(c);break;case"text":var u=o.createjQueryItem("p",[{key:"id",value:i.name}],void 0,i.define);r.append(u);break;case"image":var l=o.createjQueryItem("img",[{key:"id",value:i.name},{key:"src",value:i.define}],"img-fluid");r.append(l);break;case"input":var p=o.createjQueryItem("div",void 0,"form-group"),g=o.createjQueryItem("label",[{key:"for",value:i.name}],"sr-only",i.define);p.append(g);var m=o.createjQueryItem("input",[{key:"type",value:"text"},{key:"id",value:i.name},{key:"for",value:i.name},{key:"placeholder",value:i.define}],"form-control",i.define);p.append(m),r.append(p);break;case"list":for(var d=o.createjQueryItem("div",void 0,"list-group"),f=i.define,v=function(e){var t=o.createjQueryItem("a",void 0,"list-group-item list-group-item-action");$(".emulator").on("click","#"+i.name,function(){a._stateService.emulatorCentralCallBack(i,e.url)});var n=o.createjQueryItem("h5",void 0,"list-group-item-heading",e.title),r=o.createjQueryItem("p",void 0,"list-group-item-text",e.description);t.append(n),t.append(r),d.append(t)},h=0,y=f;h<y.length;h++){var P=y[h];v(P)}r.append(d)}n.append(r)},o=this,i=0,c=e.rawLayout;i<c.length;i++){var s=c[i];r(s)}return n},e.prototype.createPagesAndSave=function(){for(var e=0,t=this._stateService.getPages();e<t.length;e++){var a=t[e];a.afterRenderLayout=this.createPage(a)}},e.prototype.createLayout=function(){return this.createjQueryItem("div",void 0,"container-fluid")},e.prototype.removeElementFromDOM=function(e){$(e).remove()},e.prototype.createjQueryItem=function(e,t,a,n){var r=$(document.createElement(e));if(a&&r.addClass(a),t)for(var o=0,i=t;o<i.length;o++){var c=i[o];r.attr(c.key,c.value)}return n&&r.html(n),r},e}();t.TemplatingService=a},function(e,t){"use strict";var a=function(){function e(e,t){this._templatingService=e,this._stateService=t}return e.prototype.removeCurrentPageFromScreen=function(){this._templatingService.removeElementFromDOM(".container-fluid")},e.prototype.goPage=function(e){this.removeCurrentPageFromScreen();for(var t=0,a=this._stateService.getPages();t<a.length;t++){var n=a[t];n.name===e&&($(".emulator").prepend(n.afterRenderLayout),this.renewCurrentPage(n.name))}},e.prototype.renderAllPages=function(e){if(e){var t=this._templatingService.createPage(e);this._stateService.getPage(e.name).afterRenderLayout=t}else this._templatingService.createPagesAndSave()},e.prototype.goStartPage=function(){this.goPage(this._stateService.getStartPageName())},e.prototype.renewCurrentPage=function(e){this._stateService.setCurrentPageName(e)},e.prototype.startEmulator=function(){var e=this,t=this._templatingService.createjQueryItem("div",void 0,"splashScreen"),a=this._templatingService.createjQueryItem("p",void 0,"brand","Smartisan");$(".emulator").append(t),t.append(a),t.fadeIn("slow",function(){a.fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){e.hideSplashScreen(),e.renderAllPages(),e.goStartPage()})})},e.prototype.hideSplashScreen=function(){$(".splashScreen").fadeOut("slow").remove()},e.prototype.showNotification=function(e){var t=this._templatingService.createjQueryItem("div",void 0,"bg-danger",e);$(".emulator").prepend(t),setTimeout(function(){t.fadeOut("slow").remove()},2e3)},e}();t.SystemService=a},function(e,t){"use strict";var a=function(){function e(e){this._systemService=e}return e.prototype.goPage=function(e){this._systemService.goPage(e)},e.prototype.showNotification=function(e){this._systemService.showNotification(e)},e.prototype.saveToLocalStorage=function(e,t){localStorage.setItem(e,t)},e.prototype.getFromLocalStorage=function(e){return localStorage.getItem(e)},e.prototype.reRenderPage=function(e){this._systemService.renderAllPages(e)},e.prototype.callYelpSearchAPI=function(e,t){var a={consumerKey:"sNul62e6H0We5KJLGYP_Bw",consumerSecret:"RxvIBp4BxRvNVxjaPlUWuiPFcYg",accessToken:"nguVll4te_e1oDcv2EkS4xKC6GOoQhcN",accessTokenSecret:"DrumlhFl5Kwb1ksCpRKEtiW6B58",serviceProvider:{signatureMethod:"HMAC-SHA1"}},n=e,r="Dunedin",o="restaurants,food",i={consumerSecret:a.consumerSecret,tokenSecret:a.accessTokenSecret},c=[];c.push(["term",n]),c.push(["location",r]),c.push(["category_filter",o]),c.push(["callback","cb"]),c.push(["oauth_consumer_key",a.consumerKey]),c.push(["oauth_consumer_secret",a.consumerSecret]),c.push(["oauth_token",a.accessToken]),c.push(["oauth_signature_method","HMAC-SHA1"]);var s={action:"https://api.yelp.com/v2/search",method:"GET",parameters:c};OAuth.setTimestampAndNonce(s),OAuth.SignatureMethod.sign(s,i);var u=OAuth.getParameterMap(s.parameters);$.ajax({url:s.action,data:u,dataType:"jsonp",jsonpCallback:"cb",cache:!0}).done(function(e,a,n){t(e.businesses[0])}).fail(function(e,t,a){console.log("error["+a+"], status["+t+"], jqXHR["+JSON.stringify(e)+"]")})},e}();t.ActionService=a}]);
//# sourceMappingURL=test.spec.js.map