import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//here we set app state
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {customerReducer} from "./state/customer.reducer";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    // here we will not gave any reducer
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature("Customers",customerReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature((CustomerEffect))

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
