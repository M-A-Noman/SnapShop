import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  showConfirmationMessage: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      city: ['', Validators.required],
      street: [''],
      geoLocation: [''],
      zipCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, this.noWhitespaceValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
    console.log('signUp form', this.signUpForm);
    if (this.signUpForm.valid) { 
      this.signUpForm.reset();
      this.showConfirmationMessage = true;
      setTimeout(() => {
        this.showConfirmationMessage = false;
      }, 3000);

    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').indexOf(' ') >= 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
  onClick() {
    this.showConfirmationMessage = false;
  }
}
