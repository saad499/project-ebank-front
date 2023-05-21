import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, 
    private route: ActivatedRoute,
    private router: Router, 
    private formBuilder: FormBuilder){}

    updateCustomerGroup!:FormGroup;
    customer!:Customer;
    id!:number;

  ngOnInit(): void {
    this.updateCustomerGroup = this.formBuilder.group({
      name:this.formBuilder.control("",[Validators.required]),
      email: this.formBuilder.control("",[Validators.required, Validators.email])
    })
    this.getCustomerById();
  }

  getCustomerById(){
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe({
      next:data=>{
        this.customer = data;
      },error: err=>{
        console.log(err);
      }
    })
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.id,this.customer).subscribe({
      next:data=>{
        console.log(data);
        this.router.navigateByUrl('/customers');
      },error:err=>{
        console.log(err);
      }
    })
  }
}
