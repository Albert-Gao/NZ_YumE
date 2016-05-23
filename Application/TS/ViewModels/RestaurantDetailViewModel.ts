<<<<<<< HEAD
/**
* This model represents the restaurants data.
* It will be used to show listed restaurants. 
*/
import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';
/**
* @export
* @class represents a restaurants data
* @constructor - selected resaurant
* @this {string} - matching restaurant
*/
=======

import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

/**
 * The Viewmodel of the RestaurantDetail page
 *
 * @export
 * @class RestaurantDetailViewModel
 */
>>>>>>> origin/dev
export class RestaurantDetailViewModel{
    /**
     * Creates a list to store restaurants
     *
     * @type {IRestaurant}
     */
    restaurant:IRestaurant;
    /**
     * Creates an instance of RestaurantDetailViewModel.
     *
     * @param {IRestaurant} passinRest - restaurant data is retrieved
     */
    constructor(passinRest:IRestaurant){
        this.restaurant = passinRest;
    }
<<<<<<< HEAD
    /**
    * @function - use google maps and location data
    * @this {value} - latitude of selected restaurant
    * @this {value} - longitude of selected restaurant
    */
=======

    /**
     * Uses lat/long to provide navigation
     */
>>>>>>> origin/dev
    navigation():void{
        let lati:number = this.restaurant.latitude;
        let longi:number = this.restaurant.longitude;
        
        //Navigate to google map with the Location data
    }
<<<<<<< HEAD
    /**
    * @function - use to add favourites 
    * this {string} - slected restaurant
    */
=======

    /**
     * Allows storage of favourite
     *
     * @param {IStorageService} myStorage -
     */
>>>>>>> origin/dev
    addFav(myStorage:IStorageService):void{
        let myFavList:IRestaurant[] = myStorage.get(Category.Favourite.toString());
        myFavList.push(this.restaurant);
    }
<<<<<<< HEAD

=======

     /**
    * @function - shows url/details of selected restaurant
    */
>>>>>>> origin/dev
    viewDetail():void{
        let url = this.restaurant.url;
        //navigate to new web page with the url
    }
}
