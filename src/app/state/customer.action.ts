 // here we will declare owr actions......
 import { Action } from "@ngrx/store";
import { Customer } from "../customer.model";

 export enum CustomerActionType{
    LOAD_CUSTOMERS="[Customer] Load Customers",
    LOAD_CUSTOMERS_SUCCESS="[Customer] Load Customers Success",
    LOAD_CUSTOMERS_FAIL="[Customer] Load Customers Fail"
 }
 export class LoadCustomers implements Action{
    readonly type = CustomerActionType.LOAD_CUSTOMERS;
     
    }

 export class LoadCustomersSuccess implements Action{
   readonly type = CustomerActionType.LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload:Customer[]){} 
}

 export class LoadCustomersFail implements Action{
   readonly type = CustomerActionType.LOAD_CUSTOMERS_FAIL;
    constructor(public payload:string){}
 }

 export type action= LoadCustomers | LoadCustomersSuccess| LoadCustomersFail;