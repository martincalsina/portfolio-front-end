import { Component } from '@angular/core';
import { Project } from '../../../../model/Project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {

  public projectForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      url: ['', [Validators.required,  Validators.maxLength(255)]],
      picture: ['', [Validators.required, Validators.maxLength(255)]]});

  }

  public touchedAndValid(formControlName: string): boolean {
    return this.projectForm!.get(formControlName)!.valid && this.projectForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.projectForm!.get(formControlName)!.invalid && this.projectForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {
    if (this.projectForm?.valid) {

      console.log(this.projectForm?.value);

      const formValues = this.projectForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);

      const startDateValue: string = formValues.startDate;
      const startDate: Date = new Date(startDateValue);
      
      let project: Project = new Project(
        0,
        formValues.name,
        formValues.description,
        formValues.picture,
        formValues.url,
        userId
      );

      this.dataService.createProject(project).subscribe(r => {
        console.log("Project successfully created", r);
        this.projectForm?.reset;
      }, error => {
        console.log("The project couldn't been created", error);
      });

    } else {
      console.log(this.projectForm?.value)
      console.log("The form is invalid, check it out");
    }
  }

}
