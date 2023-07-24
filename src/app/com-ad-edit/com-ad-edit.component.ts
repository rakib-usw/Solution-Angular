import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-com-ad-edit',
  templateUrl: './com-ad-edit.component.html',
  styleUrls: ['./com-ad-edit.component.scss']
})
export class ComAdEditComponent {

  compForm: FormGroup;

  comp_category: string[]=[
    'IT Company',
    'Fasion Company',
    'Retail Company'
  ]

  constructor(private _fb:FormBuilder, private _compService:CompanyService){
    this.compForm=this._fb.group({
      company_code:'',
      company_name:'',
      share_price:'',
      create_date:'',
      location:'',
      company_type:'',
      email:'',
    })
  }

  onFormSubmit(){
    if (this.compForm.valid){
      this._compService.adCompany(this.compForm.value);
      console.log(this.compForm.value);
    }
  }
}
