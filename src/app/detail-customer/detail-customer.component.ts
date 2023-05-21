import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private route: ActivatedRoute){}
  id!:number;
  customer!:Customer;

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById(){
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer = data;
    },error=>{
      console.log(error);
    });
  }
  

}
