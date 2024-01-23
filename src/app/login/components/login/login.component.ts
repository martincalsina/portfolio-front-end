import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm?: FormGroup;

  loginError: boolean = false;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {}

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })

  }

  touchedAndInvalid(formControlName: string) {
    return this.loginForm?.get(formControlName)!.invalid && this.loginForm?.get(formControlName)!.touched
  }

  onSubmit() {

    this.loginError = false;

    if (this.loginForm?.valid) {

      const formValues = this.loginForm.value;
      const email = formValues.email;
      const password = formValues.password;

      this.dataService.login(email, password).subscribe(r => {

        if (r != null) {

          const userId = r.id;
          sessionStorage.setItem("userEmail", email);
          sessionStorage.setItem("userPassword", password);
          this.router.navigate([`/home/${userId}`]);
          console.log("You logged in successfully");

        } else {
          console.log("The given email or password is invalid");
          this.loginError = true;
        }

      }, error => {
        console.log("An error occurred");
      });

    } else {
      console.log("The form is invalid, check it out");
    }

  }

}
