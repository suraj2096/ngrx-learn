import {HttpClient} from '@angular/common/http';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class CustomerService{
    constructor(private httpclient:HttpClient){}
    get():Observable<any> {
        return this.httpclient.get<Customer[]>(' http://localhost:3000/Customers');
      }
}