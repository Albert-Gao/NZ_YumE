"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
var RestaurantDetailViewModel = (function () {
    function RestaurantDetailViewModel(passinRest) {
        this.restaurant = passinRest;
    }
    RestaurantDetailViewModel.prototype.navigation = function () {
        var lati = this.restaurant.latitude;
        var longi = this.restaurant.longitude;
        //Navigate to google map with the Location data
    };
    RestaurantDetailViewModel.prototype.addFav = function (myStorage) {
        var myFavList = myStorage.get(Category_1.Category.Favourite.toString());
        myFavList.push(this.restaurant);
    };
    RestaurantDetailViewModel.prototype.viewDetail = function () {
        var url = this.restaurant.url;
        //navigate to new web page with the url
    };
    return RestaurantDetailViewModel;
}());
exports.RestaurantDetailViewModel = RestaurantDetailViewModel;
