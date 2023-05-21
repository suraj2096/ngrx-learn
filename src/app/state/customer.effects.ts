import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { Observable,of } from "rxjs";
import { map,mergeMap,catchError } from "rxjs";
import * as CustomerActions from './customer.action';
import { Customer } from '../customer.model';
import { CustomerService } from "../customer.service";
@Injectable()
export class CustomerEffect{
constructor(
    private actions$:Actions,
    private customerService:CustomerService
){

}
  loadCustomer$ = createEffect(()=>
    this.actions$.pipe(
        ofType<CustomerActions.LoadCustomers>(
            CustomerActions.CustomerActionType.LOAD_CUSTOMERS
        ),
        mergeMap((actions:CustomerActions.LoadCustomers)=>
        this.customerService.get().pipe(
            map(
                 (customers:Customer[])=>
                 new CustomerActions.LoadCustomersSuccess(customers)
            ),
            catchError(err=>of(new CustomerActions.LoadCustomersFail(err)))
        )
        )
    

    )
  );


}