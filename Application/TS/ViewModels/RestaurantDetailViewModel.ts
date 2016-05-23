
import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

/**
 * (description)
 * 
 * @export
 * @class RestaurantDetailViewModel
 */
export class RestaurantDetailViewModel{
    /**
     * (description)
     * 
     * @type {IRestaurant}
     */
    restaurant:IRestaurant;
    /**
     * Creates an instance of RestaurantDetailViewModel.
     * 
     * @param {IRestaurant} passinRest (description)
     */
    constructor(passinRest:IRestaurant){
        this.restaurant = passinRest;
    }

    /**
     * (description)
     */
    navigation():void{
        let lati:number = this.restaurant.latitude;
        let longi:number = this.restaurant.longitude;
        
        //Navigate to google map with the Location data
    }

    /**
     * (description)
     * 
     * @param {IStorageService} myStorage (description)
     */
    addFav(myStorage:IStorageService):void{
        let myFavList:IRestaurant[] = myStorage.get(Category.Favourite.toString());
        myFavList.push(this.restaurant);
    }

    /**
     * (description)
     */
    viewDetail():void{
        let url = this.restaurant.url;
        //navigate to new web page with the url
    }
}