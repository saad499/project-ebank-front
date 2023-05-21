import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient) { }

  public getCustomer():Observable<Array<Customer>>{
    return this.httpClient.get<Array<Customer>>("http://localhost:8081/customer")
  }

  public getCustomerById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>("http://localhost:8081/customer/"+id);
  }

  public addCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>("http://localhost:8081/customer",customer);
  }

  public deleteCustomer(id:number):Observable<Customer>{
    return this.httpClient.delete<Customer>("http://localhost:8081/customer/"+id);
  }

  public updateCustomer(id :number, customer: Customer):Observable<Customer>{
    return this.httpClient.put<Customer>("http://localhost:8081/customer/"+id,customer);
  }
}
