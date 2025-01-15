import { PieceRechangeService } from './../../services/piece-rechange.service';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PieceRechangeDetails } from 'src/models/piece-rechange';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-form-piece-rechange-details',
  templateUrl: './form-piece-rechange-details.component.html',
  styleUrls: ['./form-piece-rechange-details.component.css']
})
export class FormPieceRechangeDetailsComponent {
  constructor(public PieceRechangeService: PieceRechangeService, private toastr: ToastrService) {
  }

  onSubmit(form: NgForm) {
    console.log('Form valid:', form.valid);
    console.log('Form value:', form.value);
    this.PieceRechangeService.formSubmitted = true;
    if (form.valid) {
      console.log('Form is valid, submitting...');
      if (this.PieceRechangeService.formData.PieceId == 0) {
        this.insertRecord(form);
      } else {
        this.updateRecord(form);
      }
    } else {
      console.log('Form is invalid.');
    }
  }
  

  insertRecord(form: NgForm) {
    this.PieceRechangeService.postPieceRechangeDetails()
      .subscribe({
        next: res => {
          this.PieceRechangeService.list = res as PieceRechangeDetails[]
          this.PieceRechangeService.resetForm(form)
          this.toastr.success('Inserted successfully', 'Rechange Detail Register')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.PieceRechangeService.putPieceRechangeDetails()
      .subscribe({
        next: res => {
          this.PieceRechangeService.list = res as PieceRechangeDetails[]
          this.PieceRechangeService.resetForm(form)
          this.toastr.info('Updated successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
   }
}
