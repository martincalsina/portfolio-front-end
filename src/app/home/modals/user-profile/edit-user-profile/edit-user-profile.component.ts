import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../../../model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrl: './edit-user-profile.component.css'
})
export class EditUserProfileComponent implements OnInit, OnChanges{

  public userForm?: FormGroup;

  @Input() userToEdit?: User;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {

    this.userForm = this.fb.group({
      name: [this.userToEdit?.getName(), [Validators.required, Validators.maxLength(150)]],
      headline: [this.userToEdit?.getHeadline(), [Validators.required, Validators.maxLength(150)]],
      picture: [this.userToEdit?.getPicture(), [Validators.required, Validators.maxLength(255)]]
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.userForm = this.fb.group({
      name: [this.userToEdit?.getName(), [Validators.required, Validators.maxLength(150)]],
      headline: [this.userToEdit?.getHeadline(), [Validators.required, Validators.maxLength(150)]],
      picture: [this.userToEdit?.getPicture(), [Validators.required, Validators.maxLength(255)]]
    });

  }

  public touchedAndValid(formControlName: string): boolean {
    return this.userForm!.get(formControlName)!.valid && this.userForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.userForm!.get(formControlName)!.invalid && this.userForm!.get(formControlName)!.touched;
  }

  onSubmit() {

    if (this.userForm?.valid) {

      this.dataService.getLoadingSubject().next(true);

      const formValues = this.userForm.value;

      let user: User = new User(
        this.userToEdit!.getId(),
        this.userToEdit!.getEmail(),
        this.userToEdit!.getPassword(),
        formValues.name,
        formValues.headline,
        this.userToEdit!.getDescription(),
        formValues.picture
      )

      this.dataService.editUser(user).subscribe(r => {
        console.log("The user was successfully updated", r);
        this.dataService.getUserSubject().next();
        this.dataService.getLoadingSubject().next(false);
      }, error => {
        console.log("There was an error while trying to edit the user", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log("The form is not valid, checko it out.");
    }

  }

  

}
