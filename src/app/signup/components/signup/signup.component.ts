import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { User } from '../../../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

    signupForm?: FormGroup;

    public emailAlreadyInUse: boolean = false;
    public userCreated: boolean = false;
  
    constructor(private fb: FormBuilder, 
      private dataService: DataService,
      private router: Router) {
  
    }
  
    ngOnInit(): void {
  
      this.signupForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(150)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
        password: ['', [Validators.required, Validators.maxLength(100)]],
        confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      });
  
    }

    touchedAndValid(formControlName: string) {
        return this.signupForm?.get(formControlName)?.valid && this.signupForm?.get(formControlName)?.touched;
    }

    touchedAndInvalid(formControlName: string) {
        return this.signupForm?.get(formControlName)?.invalid && this.signupForm?.get(formControlName)?.touched;
    }
    
    matchPassword(control: FormControl) {
      const password = this.signupForm ? this.signupForm.get('password')!.value : '';
      return password === control.value ? null : { mismatch: true };
    }
    
    validInput(formControlName: string): boolean {
      if (this.signupForm!.get(formControlName)?.valid) {
        return true;
      } else {
        return false;
      }
    }
    
    onSubmit(): void {
  
      if (this.signupForm!.valid) {
  
        //this.dataService.getLoadingScreenSubject().next(true);
  
        console.log('Valid form', this.signupForm!.value);

        const formValues = this.signupForm!.value;
        const email = formValues.email;
  
        this.emailAlreadyInUse= false;
        
        this.dataService.existsByEmail(email).subscribe( existsUsername => {
  
          if (!existsUsername) {
  
            let user: User = new User(
                0,
                email,
                formValues.password,
                formValues.name,
                "What do you do?",
                "Tell us something about you!",
                "Let people see you!"
            );

            this.dataService.createUser(user).subscribe(r => {
  
              console.log("User created", r);
  
              this.userCreated = true;
  
              //this.dataService.getLoadingScreenSubject().next(false);

              sessionStorage.setItem("userEmail", r.email);
              sessionStorage.setItem("userPassword", r.password);
              
              const userId = r.id;
  
              //I give a bit of time to the user to see that its account was created
              setTimeout(() => {
                console.log("Going to your potfolio");
                this.router.navigate([`/home/${userId}`]);
              }, 3000);
  
            });
  
          } else {
  
            this.emailAlreadyInUse = true;
            console.log("The given username is already in use.");    
       
          }
          
        }, error => {

          console.log("The user couldn't been created", error);
  
        });

  
      } else {
        //angular [class.invalid]
        console.log('Invalid form. Correct the errors.');
      }
  
    }
    
}
