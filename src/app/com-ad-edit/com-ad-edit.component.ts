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

  // Only Numbers with Decimals
  keyPressNumbersDecimal(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Only AlphaNumeric
  keyPressAlphaNumeric(event: any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onFormSubmit(){
    if (this.compForm.valid){
      this._compService.adCompany(this.compForm.value);
      console.log(this.compForm.value);
    }
  }
}
