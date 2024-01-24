import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Education } from '../../../../model/Education';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrl: './edit-education.component.css'
})
export class EditEducationComponent implements OnInit, OnChanges {

  @Input() educationToEdit?: Education;

  public educationForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private datePipe: DatePipe) {}

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

  ngOnChanges(changes: SimpleChanges): void {

    const formattedStartDate = this.datePipe.transform(this.educationToEdit?.getStartDate(), 'yyyy-MM-dd');
    const formattedEndDate = this.educationToEdit?.getEndDate() ? this.datePipe.transform(this.educationToEdit.getEndDate(), 'yyyy-MM-dd') : null;
    let isStudying = false;

    if (formattedEndDate == null) {
      isStudying = true;
    }

    console.log(formattedStartDate);
    console.log(formattedEndDate);
    
    this.educationForm = this.fb.group({
      institution: [this.educationToEdit?.getInstitution(), [Validators.required, Validators.maxLength(150)]],
      title: [this.educationToEdit?.getTitle(), [Validators.required, Validators.maxLength(150)]],
      startDate: [formattedStartDate, [Validators.required]],
      isStudying: [isStudying],
      endDate: [formattedEndDate],
      description: [this.educationToEdit?.getDescription(), [Validators.required, Validators.maxLength(300)]],
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
        this.educationToEdit!.getId(),
        formValues.institution,
        formValues.title,
        formValues.description,
        startDate,
        formValues.endDate,
        userId
      );

      this.dataService.editEducation(education).subscribe(r => {
        console.log("Education successfully edited", r);
        this.dataService.getEducationSubject().next();
        this.educationForm?.reset;
        this.dataService.getLoadingSubject().next(false);
      }, error => {
        console.log("The education couldn't been edited", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log(this.educationForm?.value)
      console.log("The form is invalid, check it out");
    }
  }


}
