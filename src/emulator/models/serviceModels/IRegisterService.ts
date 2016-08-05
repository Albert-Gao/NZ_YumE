import {IApp} from './../dataModels/IApp';

export interface IRegisterService{
    hasApp():boolean;
    register():IApp;
}