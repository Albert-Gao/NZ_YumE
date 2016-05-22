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
export class RestaurantDetailViewModel{
    restaurant:IRestaurant;
    constructor(passinRest:IRestaurant){
        this.restaurant = passinRest;
    }
    /**
    * @function - use google maps and location data
    * @this {value} - latitude of selected restaurant
    * @this {value} - longitude of selected restaurant
    */
    navigation():void{
        let lati:number = this.restaurant.latitude;
        let longi:number = this.restaurant.longitude;
        
        //Navigate to google map with the Location data
    }
    /**
    * @function - use to add favourites 
    * this {string} - slected restaurant
    */
    addFav(myStorage:IStorageService):void{
        let myFavList:IRestaurant[] = myStorage.get(Category.Favourite.toString());
        myFavList.push(this.restaurant);
    }
    /**
    * @function - shows url/details od selected restaurant
    */
    viewDetail():void{
        let url = this.restaurant.url;
        //navigate to new web page with the url
    }
}