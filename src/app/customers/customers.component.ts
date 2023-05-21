import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers!: Array<Customer>;
  constructor(private customerService: CustomerService, private router :Router){

  }
  ngOnInit(): void {
    this.handleCustomer();
  }

  handleCustomer(){
    this.customerService.getCustomer().subscribe({
      next:(data)=>{
        this.customers = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  detailCustomer(customer :Customer){
    this.router.navigateByUrl('detail-customer/'+customer.id);
  }

  deleteCustomer(customer :Customer){
    this.customerService.deleteCustomer(customer.id).subscribe({
      next:(data)=>{
        this.handleCustomer();
      }, error:(err)=>{
        console.log(err);
      }
    });
  }

  updateCustomer(customer :Customer){
    this.router.navigateByUrl('update-customer/'+customer.id);
  }

}
