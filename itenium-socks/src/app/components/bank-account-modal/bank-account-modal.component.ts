import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-bank-account-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogActions, MatDialogContent],
  templateUrl: './bank-account-modal.component.html'
})
export class BankAccountModalComponent {
  ibanInput = new FormControl('');
  @Output() onSubmitBankAccount = new EventEmitter<boolean>();

  addBankAccountNumber() {
    console.log('Dummy method');
    console.log('printing: ' + this.ibanInput.value);
    this.onSubmitBankAccount.emit(true);
  }
}
