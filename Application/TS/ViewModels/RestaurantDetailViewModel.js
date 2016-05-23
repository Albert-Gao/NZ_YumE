"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
/**
 * The Viewmodel of the RestaurantDetail page
 *
 * @export
 * @class RestaurantDetailViewModel
 */
var RestaurantDetailViewModel = (function () {
    /**
     * Creates an instance of RestaurantDetailViewModel.
     *
     * @param {IRestaurant} passinRest - restaurant data is retrieved
     */
    function RestaurantDetailViewModel(passinRest) {
        this.restaurant = passinRest;
    }
    /**
    * use google maps and location data
    */
    RestaurantDetailViewModel.prototype.navigation = function () {
        var lati = this.restaurant.latitude;
        var longi = this.restaurant.longitude;
        //Navigate to google map with the Location data
    };
    /**
     * Allows storage of favourite
     *
     * @param {IStorageService} myStorage -
     */
    RestaurantDetailViewModel.prototype.addFav = function (myStorage) {
        var myFavList = myStorage.get(Category_1.Category.Favourite.toString());
        myFavList.push(this.restaurant);
    };
    /**
   * @function - shows url/details of selected restaurant
   */
    RestaurantDetailViewModel.prototype.viewDetail = function () {
        var url = this.restaurant.url;
        //navigate to new web page with the url
    };
    return RestaurantDetailViewModel;
}());
exports.RestaurantDetailViewModel = RestaurantDetailViewModel;
