import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

export class RestaurantDetailViewModel{
    restaurant:IRestaurant;
    constructor(passinRest:IRestaurant){
        this.restaurant = passinRest;
    }
    
    navigation():void{
        let lati:number = this.restaurant.latitude;
        let longi:number = this.restaurant.longitude;
        
        //Navigate to google map with the Location data
    }
    
    addFav(myStorage:IStorageService):void{
        let myFavList:IRestaurant[] = myStorage.get(Category.Favourite.toString());
        myFavList.push(this.restaurant);
    }
    
    viewDetail():void{
        let url = this.restaurant.url;
        //navigate to new web page with the url
    }
}