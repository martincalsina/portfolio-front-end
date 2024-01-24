import { Component } from '@angular/core';
import { Experience } from '../../../../model/Experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrl: './create-experience.component.css'
})
export class CreateExperienceComponent {

  public experienceForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.experienceForm = this.fb.group({
      institution: ['', [Validators.required, Validators.maxLength(150)]],
      position: ['', [Validators.required, Validators.maxLength(150)]],
      startDate: ['', [Validators.required]],
      isWorking: [false],
      endDate: [''],
      description: ['', [Validators.required, Validators.maxLength(300)]],
    });

  }

  public touchedAndValid(formControlName: string): boolean {
    return this.experienceForm!.get(formControlName)!.valid && this.experienceForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.experienceForm!.get(formControlName)!.invalid && this.experienceForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {
    if (this.experienceForm?.valid) {

      this.dataService.getLoadingSubject().next(true);

      console.log(this.experienceForm?.value);

      const formValues = this.experienceForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);

      const startDateValue: string = formValues.startDate;
      const startDate: Date = new Date(startDateValue);
      
      let experience: Experience = new Experience(
        0,
        formValues.institution,
        formValues.position,
        formValues.description,
        startDate,
        formValues.endDate,
        userId
      );

      this.dataService.createExperience(experience).subscribe(r => {
        console.log("Experience successfully created", r);
        this.dataService.getExperienceSubject().next();
        this.experienceForm?.reset;
        this.dataService.getLoadingSubject().next(false);
      }, error => {
        console.log("The experience couldn't been created", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log(this.experienceForm?.value)
      console.log("The form is invalid, check it out");
    }
  }

}
