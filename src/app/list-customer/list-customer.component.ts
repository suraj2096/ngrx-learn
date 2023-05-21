import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import * as CustomerActions from '../state/customer.action';
import * as FromCustomerReducer from "../state/customer.reducer"
import { Customer } from '../customer.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent {
customers:Observable<Customer[]>;
constructor(private store:Store<any>){
  
  this.store.dispatch(new CustomerActions.LoadCustomers());
  // this.store.subscribe({
  //   next:(state)=>{
     
  //     this.customers = this.store.pipe(select(FromCustomerReducer.getCustomers));
  //   }
  // })
this.customers = this.store.pipe(select(FromCustomerReducer.getCustomers));
}
}
