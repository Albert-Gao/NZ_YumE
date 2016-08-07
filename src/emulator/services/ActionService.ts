import {IActionService} from "../models/serviceModels/IActionService";
import {ISystemService} from "../models/serviceModels/ISystemService";
declare var OAuth:any;

export class ActionService implements IActionService{
    _systemService: ISystemService;

    constructor(systemService: ISystemService) {
        this._systemService = systemService;
    }

    goPage(name: string) {
        this._systemService.goPage(name);
    }

    showNotification(words: string) {
        this._systemService.showNotification(words);
    }

    saveToLocalStorage(key: string, value: string) {
        localStorage.setItem(key,value);
    }

    getFromLocalStorage(key: string): string {
        return localStorage.getItem(key);
    }

    callYelpSearchAPI(keywords:string):any{
        function cb(data) {
            console.log("cb: " + JSON.stringify(data));
        }

        let auth = {
            consumerKey : "sNul62e6H0We5KJLGYP_Bw",
            consumerSecret : "RxvIBp4BxRvNVxjaPlUWuiPFcYg",
            accessToken : "nguVll4te_e1oDcv2EkS4xKC6GOoQhcN",
            // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
            // You wouldn't actually want to expose your access token secret like this in a real application.
            accessTokenSecret : "DrumlhFl5Kwb1ksCpRKEtiW6B58",
            serviceProvider : {
                signatureMethod : "HMAC-SHA1"
            }
        };

        let terms = keywords;
        let near = 'Dunedin';

        let accessor = {
            consumerSecret : auth.consumerSecret,
            tokenSecret : auth.accessTokenSecret
        };

        let parameters = [];
        parameters.push(['term', terms]);
        parameters.push(['location', near]);
        parameters.push(['callback', 'cb']);
        parameters.push(['oauth_consumer_key', auth.consumerKey]);
        parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
        parameters.push(['oauth_token', auth.accessToken]);
        parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

        let message = {
            'action' : 'https://api.yelp.com/v2/search',
            'method' : 'GET',
            'parameters' : parameters
        };



        OAuth.setTimestampAndNonce(message);
        OAuth.SignatureMethod.sign(message, accessor);

        var parameterMap = OAuth.getParameterMap(message.parameters);

        $.ajax({
            'url' : message.action,
            'data' : parameterMap,
            'dataType' : 'jsonp',
            'jsonpCallback' : 'cb',
            'cache': true
        })
            .done(function(data, textStatus, jqXHR) {
                    console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                }
            )
            .fail(function(jqXHR, textStatus, errorThrown) {
                    console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                }
            );

    }
}