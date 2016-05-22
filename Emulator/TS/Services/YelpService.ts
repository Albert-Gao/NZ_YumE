/**
* This model represents the Yelp service.
* It will be used to store user data. 
* @export
* @class YelpService
*/
export class YelpService {
/**
* @function - creates user id
* 
* @return {string} - returns user id
*/
    createIdentity(): string {
        let myID: string;

        myID = encodeURIComponent("oauth_consumer_key=") + encodeURIComponent("sNul62e6H0We5KJLGYP_Bw");
        myID += "&" + encodeURIComponent("oauth_token=") + encodeURIComponent("nguVll4te_e1oDcv2EkS4xKC6GOoQhcN");
        myID += "&" + encodeURIComponent("oauth_signature_method=") + encodeURIComponent("hmac-sha1");
        myID += "&" + encodeURIComponent("oauth_timestamp=") + encodeURIComponent(this.createTimestamp().toString());
        myID += "&" + encodeURIComponent(this.createNonce());

        return myID;
    }
    /**
    * @function - creates a timestamp for user
    * return {value} - returns the timestamp
    */
    createTimestamp(): number {
        return Math.round((new Date()).getTime() / 1000.0);
    }
    /**
    * @function
    * @return {value}
    */
    createNonce(length?: number): string {
        let last: any;
        let repeat: number = 0
        let myLength: number;

        if (length) {
            myLength = length;
        } else {
            length = 15;
        }

        let now = Math.pow(10, 2) * +new Date()

        if (now == last) {
            repeat++
        } else {
            repeat = 0
            last = now
        }

        let s = (now + repeat).toString()
        return s.substr(s.length - length)
    }
}