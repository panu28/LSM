import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, AbstractControlOptions } from '@angular/forms';
import { User, UserType } from 'src/app/modules/modules.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  rhide = true;
  responseMsg: String = '';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group(
      {
        firstName: fb.control('', [Validators.required]),
        lastName: fb.control('', [Validators.required]),
        email: fb.control('', [Validators.required, Validators.email]),
        mobile: fb.control('', [Validators.required]),
        password: fb.control('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ]),
        repeatPassword: fb.control(''),
      },
      {
        validators: [repeatPasswordValidator],
      } as AbstractControlOptions
    );
  }

  register(){
    let user: User = {
      id: 0,
      firstName: this.registerForm.get('firstName')?.value,
      lastNane: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      mobile: this.registerForm.get('mobile')?.value,
      password: this.registerForm.get('password')?.value,
      blocked: false,
      status: false,
      createdOn: '',
      fine: 0,
      userType: UserType.USER,
    };
    console.log(user);

  }

  getFirstNameError(){
    if (this.FirstName.hasError('required')) return 'Field is required';
    return '';
  }
  getLastNameError(){
    if (this.LastName.hasError('required')) return 'Field is required';
    return '';
  }
  getEmailError(){
    if (this.Email.hasError('required')) return 'Email is required';
    if (this.Email.hasError('email')) return 'Email is invalid';
    return '';
  }
  getPhoneError(){
    if (this.Email.hasError('required')) return 'Phone Number is required';
    return '';
  }
  getPasswordError() {
    if (this.Password.hasError('required')) return 'Password is required!';
    if (this.Password.hasError('minlength'))
      return 'Minimum 8 characters are required!';
    if (this.Password.hasError('maxlength'))
      return 'Maximum 15 characters are required!';
    return '';
  }

  get FirstName(): FormControl{
    return this.registerForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get('lastName') as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }
  get Password(): FormControl{
    return this.registerForm.get('password') as FormControl;
  }
  get RepeatPassword(): FormControl{
    return this.registerForm.get('repeatPassword') as FormControl;
  }
}

export const repeatPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pwd = control.get('password')?.value;
  const rpwd = control.get('repeatPassword')?.value;
  if (pwd === rpwd) {
    control.get('repeatPassword')?.setErrors(null);
    return null;
  } else {
    control.get('repeatPassword')?.setErrors({ repeatPassword: true });
    return { repeatPassword: true };
  }
};

