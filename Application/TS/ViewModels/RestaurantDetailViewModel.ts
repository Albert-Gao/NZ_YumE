import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

/**
 * The Viewmodel of the RestaurantDetail page
 *
 * @export
 * @class RestaurantDetailViewModel
 */
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

    /**
    * use google maps and location data
    */
    navigation():void{
        let lati:number = this.restaurant.latitude;
        let longi:number = this.restaurant.longitude;
        
        //Navigate to google map with the Location data
    }

    /**
     * Allows storage of favourite
     *
     * @param {IStorageService} myStorage -
     */
    addFav(myStorage:IStorageService):void{
        let myFavList:IRestaurant[] = myStorage.get(Category.Favourite.toString());
        myFavList.push(this.restaurant);
    }

     /**
    * @function - shows url/details of selected restaurant
    */
    viewDetail():void{
        let url = this.restaurant.url;
        //navigate to new web page with the url
    }
}
