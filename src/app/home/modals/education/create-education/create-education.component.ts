import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from '../../../../model/Education';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrl: './create-education.component.css'
})
export class CreateEducationComponent {

  public educationForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.educationForm = this.fb.group({
      institution: ['', [Validators.required, Validators.maxLength(150)]],
      title: ['', [Validators.required, Validators.maxLength(150)]],
      startDate: ['', [Validators.required]],
      isStudying: [false],
      endDate: [''],
      description: ['', [Validators.required, Validators.maxLength(300)]],
    });

  }

  public touchedAndValid(formControlName: string): boolean {
    return this.educationForm!.get(formControlName)!.valid && this.educationForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.educationForm!.get(formControlName)!.invalid && this.educationForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {
    
    if (this.educationForm?.valid) {

      this.dataService.getLoadingSubject().next(true);

      console.log(this.educationForm?.value);

      const formValues = this.educationForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);

      const startDateValue: string = formValues.startDate;
      const startDate: Date = new Date(startDateValue);
      
      let education: Education = new Education(
        0,
        formValues.institution,
        formValues.title,
        formValues.description,
        startDate,
        formValues.endDate,
        userId
      );

      this.dataService.createEducation(education).subscribe(r => {
        console.log("Education successfully created", r);
        this.dataService.getEducationSubject().next();
        this.educationForm?.reset;
        this.dataService.getLoadingSubject().next(false);
      }, error => {
        console.log("The education couldn't been created", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log(this.educationForm?.value)
      console.log("The form is invalid, check it out");
    }
  }


}
