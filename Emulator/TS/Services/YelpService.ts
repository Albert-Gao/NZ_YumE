/**
 * This class retrive infomation from Yelp API using OAuth2 protocol.
 *
 * @export
 * @class YelpService
 */
export class YelpService {

    /**
     * Create the identity that need to fetch the data.
     *
     * @returns {string} - The identity that generated.
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
     * Create the timestamp following the OAuth2 rule.
     *
     * @returns {number} - the actual timestamp that has been generated.
     */
    createTimestamp(): number {
        return Math.round((new Date()).getTime() / 1000.0);
    }

    /**
     * Generate the random value that is used when creating the identity.
     *
     * @param {number} [length] - the length needs to generate.
     * @returns {string} -
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
