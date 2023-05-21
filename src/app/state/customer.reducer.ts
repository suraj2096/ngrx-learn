import * as CustomerActions from './customer.action';
import { Customer } from '../customer.model';
import {createFeatureSelector,createSelector} from "@ngrx/store";
export interface CustomerState{
    customers:Customer[],
    error:string
};
export const initialState:CustomerState = {
    customers:[],
    error:""
};
export function customerReducer(state=initialState,action:CustomerActions.action):CustomerState{
switch (action.type) {
    case CustomerActions.CustomerActionType.LOAD_CUSTOMERS:
      return{
        ...state,
        error:"hello"
      };    
      case CustomerActions.CustomerActionType.LOAD_CUSTOMERS_SUCCESS:
        return{
          ...state,
          error:"hello",
          customers:action.payload
        };  
        case CustomerActions.CustomerActionType.LOAD_CUSTOMERS_FAIL:
        return{
          ...state,
         error:action.payload
        };  

    default:
        return state;
}
}

const getCustomerFeatureState = createFeatureSelector<CustomerState>(
    "Customers"
)
export const getCustomers = createSelector(
    getCustomerFeatureState,
    (state:CustomerState)=>state.customers
);