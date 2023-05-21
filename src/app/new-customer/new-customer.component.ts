import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  newCustomerFormGroup!:FormGroup;
  constructor(private customerService:CustomerService,
    private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.newCustomerFormGroup = this.formBuilder.group({
      name:this.formBuilder.control("",[Validators.required]),
      email:this.formBuilder.control("",[Validators.required,Validators.email])
    });
  }


  handleSaveCustomer(){
    let customer: Customer = this.newCustomerFormGroup.value;
    this.customerService.addCustomer(customer).subscribe({
      next : data => {
        console.log("Enregistrement avec succes");
        this.router.navigateByUrl("/customers");
      },error : err =>{
        console.log(err);
      }
    })
  }
  

}
