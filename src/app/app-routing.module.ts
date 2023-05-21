import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';

const routes: Routes = [
  {path:'customers',component:CustomersComponent},
  {path:'new-customer',component:NewCustomerComponent},
  {path:'update-customer/:id',component:UpdateCustomerComponent},
  {path:'detail-customer/:id',component:DetailCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
