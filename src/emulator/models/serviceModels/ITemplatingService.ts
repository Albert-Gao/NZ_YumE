import {IPage} from './../dataModels/IPage'

export interface ITemplatingService{
    generate():Array<IPage>;
}