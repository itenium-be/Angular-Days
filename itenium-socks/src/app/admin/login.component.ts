import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm): void {
    if (!form.valid)
      return;

    this.authService.login(form.value);
  }
}
