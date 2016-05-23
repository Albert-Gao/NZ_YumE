"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
/**
 * (description)
 *
 * @export
 * @class RestaurantDetailViewModel
 */
var RestaurantDetailViewModel = (function () {
    /**
     * Creates an instance of RestaurantDetailViewModel.
     *
     * @param {IRestaurant} passinRest (description)
     */
    function RestaurantDetailViewModel(passinRest) {
        this.restaurant = passinRest;
    }
    /**
     * (description)
     */
    RestaurantDetailViewModel.prototype.navigation = function () {
        var lati = this.restaurant.latitude;
        var longi = this.restaurant.longitude;
        //Navigate to google map with the Location data
    };
    /**
     * (description)
     *
     * @param {IStorageService} myStorage (description)
     */
    RestaurantDetailViewModel.prototype.addFav = function (myStorage) {
        var myFavList = myStorage.get(Category_1.Category.Favourite.toString());
        myFavList.push(this.restaurant);
    };
    /**
     * (description)
     */
    RestaurantDetailViewModel.prototype.viewDetail = function () {
        var url = this.restaurant.url;
        //navigate to new web page with the url
    };
    return RestaurantDetailViewModel;
}());
exports.RestaurantDetailViewModel = RestaurantDetailViewModel;
